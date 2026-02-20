type SdkModule = Record<string, unknown>;

type StripClient<T> =
  T extends (options?: infer O) => infer R
    ? (options?: Omit<O & {}, 'client'>) => R
    : T extends (options: infer O) => infer R
      ? (options: Omit<O, 'client'>) => R
      : T;

export type BoundSdk<M extends SdkModule> = {
  [K in keyof M as M[K] extends (...args: any[]) => any ? K : never]: StripClient<M[K]>;
};

// ---------------------------------------------------------------------------
// Backward-compatibility helpers
//
// The v4 SDK functions expect a single options object: { query, body, path }.
// Older code may call with flat params or positional args.  The compat layer
// detects the calling convention and rewrites arguments on the fly.
// ---------------------------------------------------------------------------

/** Returns true when the object already uses the v4 structured style. */
function hasStructuredOptions(obj: Record<string, unknown>): boolean {
  return 'query' in obj || 'body' in obj || 'path' in obj;
}

/** Returns true for write operations that send a request body. */
function isWriteOperation(name: string): boolean {
  return /(?:Create|Update|PartialUpdate)$/.test(name);
}

/** Convert camelCase to snake_case (e.g. groupName → group_name). */
function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (ch) => `_${ch.toLowerCase()}`);
}

/**
 * Extract the URL template from a generated SDK function's source.
 * Works because tsup preserves string literals in the output.
 */
function extractUrlTemplate(fn: Function): string | null {
  try {
    const src = fn.toString();
    const m = src.match(/url:\s*["']([^"']+)["']/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

/** Pull `{param}` names out of a URL template, preserving order. */
function extractPathParamNames(url: string): string[] {
  return [...url.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
}

/**
 * Split a flat key/value map into path params and the rest, using the
 * URL-template param names for matching (supports both snake_case keys
 * and camelCase equivalents).
 */
function separatePathParams(
  obj: Record<string, unknown>,
  pathParamNames: string[],
): { path: Record<string, unknown>; rest: Record<string, unknown> } {
  const path: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    const matched = pathParamNames.find(
      (p) => p === key || toSnakeCase(key) === p,
    );
    if (matched) {
      path[matched] = value;
    } else {
      rest[key] = value;
    }
  }

  return { path, rest };
}

// ---------------------------------------------------------------------------
// bindSdk – the main entry point
// ---------------------------------------------------------------------------

export function bindSdk<M extends SdkModule>(
  sdkModule: M,
  client: unknown,
): BoundSdk<M> {
  const bound: Record<string, unknown> = {};

  for (const [name, fn] of Object.entries(sdkModule)) {
    if (typeof fn !== 'function') continue;

    // Pre-compute metadata once per function.
    const url = extractUrlTemplate(fn as Function);
    const pathParamNames = url ? extractPathParamNames(url) : [];

    bound[name] = (...args: unknown[]) => {
      // Strip trailing `undefined` (covers optional params that weren't passed).
      while (args.length > 0 && args[args.length - 1] === undefined) {
        args.pop();
      }

      // ── No arguments ───────────────────────────────────────────────
      if (args.length === 0) {
        return (fn as Function)({ client });
      }

      // ── Single argument ────────────────────────────────────────────
      if (args.length === 1) {
        const arg = args[0];

        // Primitive → treat as the first (or only) path param.
        if (arg === null || typeof arg !== 'object') {
          if (pathParamNames.length > 0) {
            return (fn as Function)({
              path: { [pathParamNames[0]]: arg },
              client,
            });
          }
          return (fn as Function)({ client });
        }

        const obj = arg as Record<string, unknown>;

        // Already structured → pass through.
        if (hasStructuredOptions(obj)) {
          return (fn as Function)({ ...obj, client });
        }

        // Empty object → nothing to map.
        if (Object.keys(obj).length === 0) {
          return (fn as Function)({ client });
        }

        // Flat object – separate any path params from the rest.
        if (pathParamNames.length > 0) {
          const { path, rest } = separatePathParams(obj, pathParamNames);
          const options: Record<string, unknown> = { client };
          if (Object.keys(path).length > 0) options.path = path;
          if (Object.keys(rest).length > 0) {
            options[isWriteOperation(name) ? 'body' : 'query'] = rest;
          }
          return (fn as Function)(options);
        }

        // No path params – wrap everything as query or body.
        return (fn as Function)({
          [isWriteOperation(name) ? 'body' : 'query']: obj,
          client,
        });
      }

      // ── Multiple arguments (positional / legacy style) ─────────────
      //
      // Convention: primitive args map to path params (in URL-template
      // order), and the last object arg is body (writes) or query (reads).
      const primitiveArgs: unknown[] = [];
      let lastObjectArg: Record<string, unknown> | null = null;

      for (const arg of args) {
        if (arg !== null && typeof arg === 'object') {
          lastObjectArg = arg as Record<string, unknown>;
        } else {
          primitiveArgs.push(arg);
        }
      }

      const options: Record<string, unknown> = { client };

      // Map primitives → path params by position.
      if (primitiveArgs.length > 0 && pathParamNames.length > 0) {
        const path: Record<string, unknown> = {};
        const count = Math.min(primitiveArgs.length, pathParamNames.length);
        for (let i = 0; i < count; i++) {
          path[pathParamNames[i]] = primitiveArgs[i];
        }
        options.path = path;
      }

      // Handle the trailing object arg.
      if (lastObjectArg) {
        if (hasStructuredOptions(lastObjectArg)) {
          // Caller already partially structured (e.g. `fn(id, { query })`)
          // Merge, keeping path params we derived from primitives.
          const existingPath = options.path as
            | Record<string, unknown>
            | undefined;
          const { client: _c, ...rest } = lastObjectArg;
          if (rest.path && existingPath) {
            rest.path = {
              ...existingPath,
              ...(rest.path as Record<string, unknown>),
            };
          }
          Object.assign(options, rest);
        } else if (isWriteOperation(name)) {
          options.body = lastObjectArg;
        } else {
          options.query = lastObjectArg;
        }
      }

      return (fn as Function)(options);
    };
  }

  return bound as BoundSdk<M>;
}
