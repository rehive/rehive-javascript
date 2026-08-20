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

/** Every alias name referenced anywhere inside `node`. */
function referencedTypeNames(node: ts.Node, known: Set<string>): string[] {
  const names: string[] = [];

  const visit = (current: ts.Node): void => {
    if (ts.isTypeReferenceNode(current)) {
      const name = current.typeName.getText();
      if (known.has(name)) names.push(name);
    }
    ts.forEachChild(current, visit);
  };

  visit(node);
  return names;
}

/** True for `Foo[]` / `Array<Foo>` — items callers send as bracketed keys. */
function isCollection(node: ts.TypeNode): boolean {
  if (ts.isArrayTypeNode(node)) return true;
  if (ts.isTypeReferenceNode(node) && node.typeName.getText() === 'Array') return true;
  if (ts.isUnionTypeNode(node)) return node.types.some(isCollection);
  return false;
}

/**
 * `flat` — file lands as a top-level key, so `formDataBodySerializer` handles it.
 * `nested` — file sits behind a plain nested object; the serializer would
 * stringify it and drop the file, so it needs a call site change instead.
 */
type Reachability = 'flat' | 'nested';

/**
 * Classify every `*Data` type whose body can hold a file, resolving references
 * transitively — the admin document upload is only detectable from its own text
 * because of a deprecated `file` field, and loses detection when that goes.
 */
function classifyDataTypes(source: ts.SourceFile): Map<string, Reachability> {
  const aliases = new Map<string, ts.TypeAliasDeclaration>();

  source.forEachChild((node) => {
    if (ts.isTypeAliasDeclaration(node)) {
      aliases.set(node.name.text, node);
    }
  });

  const known = new Set(aliases.keys());
  const memo = new Map<string, boolean>();

  const carriesFile = (name: string, visiting: Set<string>): boolean => {
    const cached = memo.get(name);
    if (cached !== undefined) return cached;

    const alias = aliases.get(name);
    if (!alias || visiting.has(name)) return false;

    if (containsFileUnion(alias.type)) {
      memo.set(name, true);
      return true;
    }

    const next = new Set(visiting).add(name);
    const result = referencedTypeNames(alias.type, known).some((ref) => carriesFile(ref, next));
    memo.set(name, result);
    return result;
  };

  const propertiesOf = (name: string): ts.PropertySignature[] => {
    const alias = aliases.get(name);
    if (!alias || !ts.isTypeLiteralNode(alias.type)) return [];
    return alias.type.members.filter(ts.isPropertySignature);
  };

  const classified = new Map<string, Reachability>();

  for (const [name, alias] of aliases) {
    if (!name.endsWith('Data') || !ts.isTypeLiteralNode(alias.type)) continue;

    const body = alias.type.members.find(
      (member): member is ts.PropertySignature =>
        ts.isPropertySignature(member) && member.name.getText() === 'body',
    );
    if (!body?.type) continue;

    if (containsFileUnion(body.type)) {
      classified.set(name, 'flat');
      continue;
    }

    const kinds = new Set<Reachability>();

    for (const bodyType of referencedTypeNames(body.type, known)) {
      if (containsFileUnion(aliases.get(bodyType)!.type)) {
        kinds.add('flat');
        continue;
      }

      for (const property of propertiesOf(bodyType)) {
        if (!property.type) continue;
        const reaches = referencedTypeNames(property.type, known).some((ref) =>
          carriesFile(ref, new Set()),
        );
        if (reaches) {
          kinds.add(isCollection(property.type) ? 'flat' : 'nested');
        }
      }
    }

    // Both ways is still patchable: the array path keys are top-level.
    if (kinds.has('flat')) {
      classified.set(name, 'flat');
    } else if (kinds.has('nested')) {
      classified.set(name, 'nested');
    }
  }

  return classified;
}

/** `*Data` types that must carry `formDataBodySerializer`. */
function fileCarryingDataTypes(typesFile: string): Set<string> {
  const classified = classifyDataTypes(parseFile(typesFile));
  return new Set(
    [...classified].filter(([, kind]) => kind === 'flat').map(([name]) => name),
  );
}

/** `*Data` types that carry a file the flat serializer cannot express. */
function unpatchableDataTypes(typesFile: string): Set<string> {
  const classified = classifyDataTypes(parseFile(typesFile));
  return new Set(
    [...classified].filter(([, kind]) => kind === 'nested').map(([name]) => name),
  );
}

/** Shared with the codegen script as data only; detection stays independent. */
const EXCEPTIONS: Record<string, string> = JSON.parse(
  fs.readFileSync(path.join(REPO_ROOT, 'scripts', 'multipart-exceptions.json'), 'utf8'),
).exceptions;

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

describe('unpatchable file-carrying operations', () => {
  // Unpatchable is allowed, but only as a reviewed entry. An unlisted one means
  // a new upload endpoint nobody decided about — how 4.5.0 shipped.
  it.each(clients.map((client) => [client.name, client] as const))(
    '%s records every unpatchable body in multipart-exceptions.json',
    (_name, client) => {
      const unlisted = [...unpatchableDataTypes(client.typesFile)].filter(
        (dataType) => !(dataType in EXCEPTIONS),
      );

      expect(unlisted).toEqual([]);
    },
  );

  it('keeps the exception list honest — every entry still exists and is still nested', () => {
    const nested = new Set(clients.flatMap((client) => [...unpatchableDataTypes(client.typesFile)]));

    // A stale entry would excuse an operation that is now patchable.
    expect(Object.keys(EXCEPTIONS).sort()).toEqual([...nested].sort());
  });
});

describe('reference-following detection', () => {
  // AdminCreateUserDocumentRequest is detected today only via its deprecated
  // top-level `file`; its real multi-file path is one reference away.
  const classify = (source: string): Map<string, Reachability> =>
    classifyDataTypes(
      ts.createSourceFile('synthetic.ts', source, ts.ScriptTarget.Latest, true),
    );

  it('detects a file reached only through an Array of referenced types', () => {
    const classified = classify(`
      export type DocumentFileWriteRequest = {
          file: Blob | File;
          label?: string;
      };
      export type CreateDocumentRequest = {
          user: string;
          files?: Array<DocumentFileWriteRequest>;
      };
      export type DocumentsCreateData = {
          body: CreateDocumentRequest;
          url: '/documents/';
      };
    `);

    expect(classified.get('DocumentsCreateData')).toBe('flat');
  });

  it('treats a file behind a plain nested object as unpatchable, not absent', () => {
    const classified = classify(`
      export type CreateCompanyRequest = {
          name: string;
          logo?: Blob | File;
      };
      export type RegisterCompanyRequest = {
          email: string;
          company: CreateCompanyRequest;
      };
      export type RegisterCompanyData = {
          body: RegisterCompanyRequest;
          url: '/register/';
      };
    `);

    expect(classified.get('RegisterCompanyData')).toBe('nested');
  });

  it('ignores bodies that reach no file at all', () => {
    const classified = classify(`
      export type Nested = {
          note?: string;
      };
      export type PlainRequest = {
          nested?: Nested;
      };
      export type PlainData = {
          body: PlainRequest;
          url: '/plain/';
      };
    `);

    expect(classified.has('PlainData')).toBe(false);
  });

  it('terminates on a reference cycle', () => {
    const classified = classify(`
      export type Node = {
          child?: Node;
          file?: Blob | File;
      };
      export type CycleData = {
          body: Node;
          url: '/cycle/';
      };
    `);

    expect(classified.get('CycleData')).toBe('flat');
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
