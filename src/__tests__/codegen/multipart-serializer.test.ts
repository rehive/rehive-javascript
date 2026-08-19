/**
 * Regression guard for file-upload operations in the generated clients.
 *
 * `@hey-api/openapi-ts` emits every operation with `'Content-Type':
 * 'application/json'` and no body serializer; `scripts/fix-codegen-types.sh`
 * patches `formDataBodySerializer` into the ones whose body carries a file. When
 * that patch silently misses an operation, nothing breaks loudly — the call
 * compiles, the request goes out as JSON, and `JSON.stringify` turns the `File`
 * into `{}`. The upload just quietly contains no file.
 *
 * That is exactly what shipped in 4.5.0: a nesting change in the platform spec
 * defeated the patch script's regex, and `usersDocumentsCreate`, `usersUpdate`
 * and `usersPartialUpdate` lost their multipart handling.
 *
 * These tests read the committed generated output and decide for themselves which
 * operations need multipart, using the TypeScript compiler rather than the patch
 * script's own detection. Sharing that detection would make the test agree with
 * the bug.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

import { formDataBodySerializer, jsonBodySerializer } from '../../platform/admin/openapi-ts/core/bodySerializer.gen';

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');

type GeneratedClient = {
  /** e.g. `platform/admin` */
  name: string;
  typesFile: string;
  sdkFile: string;
};

type Operation = {
  name: string;
  dataType?: string;
  spreadsFormDataSerializer: boolean;
  /** Source text of the `Content-Type` header value, if the operation sets one. */
  contentType?: string;
};

function findGeneratedClients(): GeneratedClient[] {
  const clients: GeneratedClient[] = [];

  for (const group of ['platform', 'extensions']) {
    const groupDir = path.join(REPO_ROOT, 'src', group);
    if (!fs.existsSync(groupDir)) continue;

    for (const entry of fs.readdirSync(groupDir).sort()) {
      const dir = path.join(groupDir, entry, 'openapi-ts');
      const typesFile = path.join(dir, 'types.gen.ts');
      const sdkFile = path.join(dir, 'sdk.gen.ts');
      if (fs.existsSync(typesFile) && fs.existsSync(sdkFile)) {
        clients.push({ name: `${group}/${entry}`, typesFile, sdkFile });
      }
    }
  }

  return clients;
}

function parseFile(file: string): ts.SourceFile {
  return ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
}

/** True when `node` contains a `Blob | File` union anywhere inside it. */
function containsFileUnion(node: ts.Node): boolean {
  let found = false;

  const visit = (current: ts.Node): void => {
    if (found) return;

    if (ts.isUnionTypeNode(current)) {
      const referenced = current.types
        .filter(ts.isTypeReferenceNode)
        .map((member) => member.typeName.getText());
      if (referenced.includes('Blob') && referenced.includes('File')) {
        found = true;
        return;
      }
    }

    ts.forEachChild(current, visit);
  };

  visit(node);
  return found;
}

/**
 * Names of the `*Data` types whose request body can hold a file, and therefore
 * must be sent as multipart/form-data.
 */
function fileCarryingDataTypes(typesFile: string): Set<string> {
  const source = parseFile(typesFile);
  const aliases = new Map<string, ts.TypeAliasDeclaration>();

  source.forEachChild((node) => {
    if (ts.isTypeAliasDeclaration(node)) {
      aliases.set(node.name.text, node);
    }
  });

  const fileCarrying = new Set(
    [...aliases].filter(([, alias]) => containsFileUnion(alias.type)).map(([name]) => name),
  );

  const dataTypes = new Set<string>();

  for (const [name, alias] of aliases) {
    if (!name.endsWith('Data') || !ts.isTypeLiteralNode(alias.type)) continue;

    const body = alias.type.members.find(
      (member): member is ts.PropertySignature =>
        ts.isPropertySignature(member) && member.name.getText() === 'body',
    );
    if (!body?.type) continue;

    const referencesFileType =
      ts.isTypeReferenceNode(body.type) && fileCarrying.has(body.type.typeName.getText());

    if (referencesFileType || containsFileUnion(body.type)) {
      dataTypes.add(name);
    }
  }

  return dataTypes;
}

/** The single object literal passed to `client.post({ ... })` and friends. */
function findRequestOptions(node: ts.Node): ts.ObjectLiteralExpression | undefined {
  let found: ts.ObjectLiteralExpression | undefined;

  const visit = (current: ts.Node): void => {
    if (found) return;
    if (
      ts.isCallExpression(current) &&
      current.arguments.length === 1 &&
      ts.isObjectLiteralExpression(current.arguments[0])
    ) {
      found = current.arguments[0] as ts.ObjectLiteralExpression;
      return;
    }
    ts.forEachChild(current, visit);
  };

  visit(node);
  return found;
}

function propertyNamed(
  object: ts.ObjectLiteralExpression,
  name: string,
): ts.PropertyAssignment | undefined {
  return object.properties.find(
    (property): property is ts.PropertyAssignment =>
      ts.isPropertyAssignment(property) &&
      (property.name.getText() === name || property.name.getText() === `'${name}'`),
  );
}

function readOperations(sdkFile: string): Operation[] {
  const source = parseFile(sdkFile);
  const operations: Operation[] = [];

  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;

    for (const declaration of node.declarationList.declarations) {
      const initializer = declaration.initializer;
      if (!initializer || !ts.isArrowFunction(initializer)) continue;

      const parameterType = initializer.parameters[0]?.type;
      let dataType: string | undefined;
      if (
        parameterType &&
        ts.isTypeReferenceNode(parameterType) &&
        parameterType.typeName.getText() === 'Options'
      ) {
        const firstArgument = parameterType.typeArguments?.[0];
        if (firstArgument && ts.isTypeReferenceNode(firstArgument)) {
          dataType = firstArgument.typeName.getText();
        }
      }

      const request = findRequestOptions(initializer.body);
      if (!request) continue;

      const spreadsFormDataSerializer = request.properties.some(
        (property) =>
          ts.isSpreadAssignment(property) &&
          property.expression.getText() === 'formDataBodySerializer',
      );

      const headers = propertyNamed(request, 'headers');
      let contentType: string | undefined;
      if (headers && ts.isObjectLiteralExpression(headers.initializer)) {
        contentType = propertyNamed(headers.initializer, 'Content-Type')?.initializer.getText();
      }

      operations.push({
        name: declaration.name.getText(),
        dataType,
        spreadsFormDataSerializer,
        contentType,
      });
    }
  });

  return operations;
}

const clients = findGeneratedClients();

// Parsing ~5MB of generated types with the compiler is well past the 10s default.
jest.setTimeout(120_000);

describe('generated clients', () => {
  it('finds the generated openapi-ts clients', () => {
    expect(clients.map((client) => client.name)).toContain('platform/admin');
    expect(clients.map((client) => client.name)).toContain('platform/user');
  });

  describe.each(clients.map((client) => [client.name, client] as const))(
    '%s',
    (_name, client) => {
      const dataTypes = fileCarryingDataTypes(client.typesFile);
      const operations = readOperations(client.sdkFile).filter(
        (operation) => operation.dataType && dataTypes.has(operation.dataType),
      );

      if (dataTypes.size === 0) {
        it('has no file-upload operations', () => {
          expect(dataTypes.size).toBe(0);
        });
        return;
      }

      it('resolves every file-carrying body type to an operation', () => {
        expect(new Set(operations.map((operation) => operation.dataType))).toEqual(dataTypes);
      });

      it.each(operations.map((operation) => [operation.name, operation] as const))(
        '%s sends multipart/form-data',
        (_operationName, operation) => {
          // Without the serializer the client falls back to JSON, and
          // JSON.stringify turns every File into {} — the upload silently
          // carries no file.
          expect(operation.spreadsFormDataSerializer).toBe(true);
          // `null` deletes the header so the runtime sets multipart/form-data
          // with a boundary.
          expect(operation.contentType).not.toBe("'application/json'");
        },
      );
    },
  );
});

describe('admin file-upload operations', () => {
  // Named explicitly as well as covered generically above: if the generic
  // detection above ever resolves to an empty set, these still fail. These three
  // are the operations that regressed in 4.5.0.
  const expected = ['usersDocumentsCreate', 'usersUpdate', 'usersPartialUpdate'];

  const admin = clients.find((client) => client.name === 'platform/admin');
  const operations = readOperations(admin!.sdkFile);

  it.each(expected)('%s spreads formDataBodySerializer', (name) => {
    const operation = operations.find((candidate) => candidate.name === name);
    expect(operation).toBeDefined();
    expect(operation!.spreadsFormDataSerializer).toBe(true);
    expect(operation!.contentType).toBe('null');
  });
});

describe('formDataBodySerializer', () => {
  const file = new File(['contents'], 'passport.png', { type: 'image/png' });

  it('sends a File as a multipart part', () => {
    const body = formDataBodySerializer.bodySerializer({
      user: 'user-id',
      type: 1,
      'files[0][file]': file,
      'files[0][label]': 'front',
    });

    expect(body).toBeInstanceOf(FormData);
    expect(body.get('files[0][file]')).toBe(file);
    expect(body.get('files[0][label]')).toBe('front');
    expect(body.get('user')).toBe('user-id');
  });

  it('is what stops a File from being dropped, unlike the JSON serializer', () => {
    // The 4.5.0 failure mode, made concrete: JSON has no representation for a
    // File, so the field survives as an empty object and the server receives no
    // upload.
    const serialized = jsonBodySerializer.bodySerializer({ 'files[0][file]': file });

    expect(serialized).toBe('{"files[0][file]":{}}');
  });
});
