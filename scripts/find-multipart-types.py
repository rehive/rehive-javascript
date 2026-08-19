#!/usr/bin/env python3
"""Find Data types in a generated types.gen.ts whose body type contains Blob | File.

Those operations must be sent as `multipart/form-data`, which is what
`fix-codegen-types.sh` patches into `sdk.gen.ts`.

Prints one Data type name per line to stdout.

Usage: python3 find-multipart-types.py <types.gen.ts>

Implementation note: this parses with brace counting rather than a regex.

The previous version matched a type block with

    export type (\\w+) = \\{((?:[^{}]|\\{[^{}]*\\})*)\\}

which only tolerates one level of nested braces. When the platform spec added a
three-level-deep `annotations?: { fields?: { [key: string]: { ... } } }` field to
the user and document request schemas, that regex stopped matching those blocks
*at all* — so they were no longer seen as file-carrying, the multipart patch was
skipped, and `usersDocumentsCreate` / `usersUpdate` / `usersPartialUpdate`
shipped in 4.5.0 as `application/json`, silently uploading no file. Nesting depth
must not be able to break detection again.

Scope: a body type counts when it declares `Blob | File` itself. A file reachable
only through a *nested object* property (e.g. `company: CreateCompanyRequest`
whose `logo` is binary) is deliberately not counted — `formDataBodySerializer`
only flattens top-level keys, so it would JSON-stringify that nested object and
lose the file either way. Such an endpoint needs the caller to send flattened
bracketed keys, which is a call site decision, not something to infer here.
"""

from __future__ import annotations

import re
import sys

FILE_FIELD = "Blob | File"

TYPE_DECL = re.compile(r"\bexport type (\w+)\s*=\s*")
PROPERTY = re.compile(r"^\s*(\w+)\s*\??\s*:\s*(.*)$", re.DOTALL)

# Brackets that can wrap a `;` and therefore hide a property boundary. Angle
# brackets (`Array<Foo>`) never contain one, so they need no tracking.
OPENERS = "{(["
CLOSERS = "})]"


def strip_block_comments(source: str) -> str:
    """Drop `/** ... */` doc comments so their prose can't affect parsing."""
    return re.sub(r"/\*.*?\*/", "", source, flags=re.DOTALL)


def read_type_definitions(source: str) -> dict[str, str]:
    """Map every `export type Name = <definition>` to its definition text."""
    definitions: dict[str, str] = {}

    for match in TYPE_DECL.finditer(source):
        start = match.end()
        depth = 0
        end = len(source)

        for index in range(start, len(source)):
            char = source[index]
            if char in OPENERS:
                depth += 1
            elif char in CLOSERS:
                depth -= 1
            elif char == ";" and depth == 0:
                end = index
                break

        definitions[match.group(1)] = source[start:end]

    return definitions


def split_top_level_properties(definition: str) -> list[str]:
    """Split an object type's body into its own properties, ignoring nested ones."""
    open_brace = definition.find("{")
    close_brace = definition.rfind("}")
    if open_brace == -1 or close_brace <= open_brace:
        return []

    inner = definition[open_brace + 1 : close_brace]
    properties: list[str] = []
    depth = 0
    start = 0

    for index, char in enumerate(inner):
        if char in OPENERS:
            depth += 1
        elif char in CLOSERS:
            depth -= 1
        elif char == ";" and depth == 0:
            properties.append(inner[start:index])
            start = index + 1

    tail = inner[start:].strip()
    if tail:
        properties.append(tail)

    return properties


def body_property(definition: str) -> str | None:
    """Return the type text of an operation Data type's `body` property."""
    for prop in split_top_level_properties(definition):
        match = PROPERTY.match(prop)
        if match and match.group(1) == "body":
            return match.group(2).strip()
    return None


def multipart_data_types(source: str) -> list[str]:
    definitions = read_type_definitions(strip_block_comments(source))
    blob_types = {name for name, text in definitions.items() if FILE_FIELD in text}

    found = []
    for name, definition in definitions.items():
        if not name.endswith("Data"):
            continue
        body = body_property(definition)
        if body is None:
            continue
        # `body: SomeRequest` — or, rarely, an inline object type.
        if body in blob_types or FILE_FIELD in body:
            found.append(name)

    return sorted(found)


def main() -> None:
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <types.gen.ts>", file=sys.stderr)
        sys.exit(1)

    with open(sys.argv[1]) as f:
        source = f.read()

    for name in multipart_data_types(source):
        print(name)


if __name__ == "__main__":
    main()
