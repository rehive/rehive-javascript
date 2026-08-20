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

Reachability follows named type references, not just the body type's own text.
`AdminCreateUserDocumentRequestWritable` is detected today only via its
deprecated top-level `file`; the real path, `files?: Array<DocumentFileWriteRequest>`,
is one reference away. A text-only search loses it when that legacy field goes.

Two kinds, because they need different handling:

  flat    Binary ends up a top-level key — declared on the body type, or reached
          through an `Array<...>` (callers send `files[0][file]`, flat at
          runtime). Printed to stdout and patched.
  nested  Binary sits behind a plain nested object. The serializer flattens
          top-level keys only, so patching would stringify it and lose the file
          anyway. Needs a call site change.

A nested type fails this script unless listed in multipart-exceptions.json.
"""

from __future__ import annotations

import json
import os
import re
import sys

FILE_FIELD = "Blob | File"

EXCEPTIONS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "multipart-exceptions.json")

# Candidate type reference; non-type matches are discarded by the caller.
TYPE_REFERENCE = re.compile(r"\b([A-Z]\w*)\b")

# `Array<Foo>` / `Foo[]` — callers send these as bracketed multipart keys.
COLLECTION = re.compile(r"\bArray\s*<|\[\s*\]")

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


def referenced_types(text: str, definitions: dict[str, str]) -> list[str]:
    """Named types mentioned in a chunk of type text, in declaration order."""
    return [name for name in TYPE_REFERENCE.findall(text) if name in definitions]


def carries_file(
    name: str, definitions: dict[str, str], memo: dict[str, bool], visiting: frozenset[str] = frozenset()
) -> bool:
    """True when `name` declares a binary, or can reach one through references."""
    if name in memo:
        return memo[name]
    if name in visiting or name not in definitions:
        return False

    definition = definitions[name]
    if FILE_FIELD in definition:
        memo[name] = True
        return True

    seen = visiting | {name}
    result = any(
        carries_file(reference, definitions, memo, seen)
        for prop in split_top_level_properties(definition)
        for reference in referenced_types(prop, definitions)
    )
    memo[name] = result
    return result


def classify_body(body: str, definitions: dict[str, str], memo: dict[str, bool]) -> str | None:
    """Return "flat", "nested", or None for an operation's `body` type text."""
    if FILE_FIELD in body:
        return "flat"

    kinds = set()
    for body_type in referenced_types(body, definitions):
        if FILE_FIELD in definitions[body_type]:
            return "flat"
        for prop in split_top_level_properties(definitions[body_type]):
            if any(
                carries_file(reference, definitions, memo)
                for reference in referenced_types(prop, definitions)
            ):
                kinds.add("flat" if COLLECTION.search(prop) else "nested")

    # Both ways is still patchable: the array path keys are top-level.
    if "flat" in kinds:
        return "flat"
    return "nested" if kinds else None


def classify_data_types(source: str) -> dict[str, str]:
    """Map each file-carrying `*Data` type to "flat" or "nested"."""
    definitions = read_type_definitions(strip_block_comments(source))
    memo: dict[str, bool] = {}

    classified: dict[str, str] = {}
    for name, definition in sorted(definitions.items()):
        if not name.endswith("Data"):
            continue
        body = body_property(definition)
        if body is None:
            continue
        kind = classify_body(body, definitions, memo)
        if kind is not None:
            classified[name] = kind

    return classified


def multipart_data_types(source: str) -> list[str]:
    """The `*Data` types that must be patched with `formDataBodySerializer`."""
    return [name for name, kind in classify_data_types(source).items() if kind == "flat"]


def load_exceptions() -> dict[str, str]:
    with open(EXCEPTIONS_FILE) as f:
        return json.load(f)["exceptions"]


def main() -> None:
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <types.gen.ts>", file=sys.stderr)
        sys.exit(1)

    with open(sys.argv[1]) as f:
        source = f.read()

    classified = classify_data_types(source)
    exceptions = load_exceptions()

    for name, kind in classified.items():
        if kind == "flat":
            print(name)

    unpatchable = [name for name, kind in classified.items() if kind == "nested"]
    unreviewed = [name for name in unpatchable if name not in exceptions]

    for name in unpatchable:
        if name in exceptions:
            print(
                f"note: {name} carries a file behind a nested object and is a known "
                f"exception, so it is not patched — {exceptions[name]}",
                file=sys.stderr,
            )

    if unreviewed:
        print(
            f"\nERROR: {sys.argv[1]}\n"
            f"  These operations can carry a file, but only behind a nested object, so\n"
            f"  formDataBodySerializer cannot express them — it flattens top-level keys\n"
            f"  only, and would stringify the nested object and drop the file:\n",
            file=sys.stderr,
        )
        for name in unreviewed:
            print(f"    - {name}", file=sys.stderr)
        print(
            "\n  Sending one of these as multipart needs the call site to flatten to\n"
            "  bracketed keys. Decide that per endpoint, then record it in\n"
            f"  {os.path.relpath(EXCEPTIONS_FILE)} so codegen stays green.\n"
            "\n  Failing rather than skipping: an unpatched upload compiles, runs and\n"
            "  returns 200 while sending no file. That is how 4.5.0 shipped broken.",
            file=sys.stderr,
        )
        sys.exit(1)


if __name__ == "__main__":
    main()
