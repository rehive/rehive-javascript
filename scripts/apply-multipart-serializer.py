#!/usr/bin/env python3
"""Patch generated sdk.gen.ts operations to send multipart/form-data.

The generator hardcodes `'Content-Type': 'application/json'` for every operation
and leaves the body to the client's JSON serializer. For operations whose body
carries a `Blob | File`, that silently uploads nothing — `JSON.stringify` turns a
`File` into `{}`. Those operations need `formDataBodySerializer` spread in and the
Content-Type header nulled so the runtime sets `multipart/form-data` with a
boundary.

Usage: apply-multipart-serializer.py <sdk.gen.ts> <DataType> [<DataType> ...]

Exits non-zero, and names the operations, if any requested Data type could not be
patched. That matters more than it looks: before this check existed, a generated
output the regex no longer recognised produced no error and no patch, and three
admin file-upload operations shipped as JSON in 4.5.0 without anyone noticing.
"""

from __future__ import annotations

import re
import sys

CLIENT_IMPORT = "import { client } from './client.gen';"
SERIALIZER_IMPORT = "import { formDataBodySerializer } from './core/bodySerializer.gen';"

OPERATION_START = "export const "
DATA_TYPE = re.compile(r"\bOptions<(\w+),")

JSON_HEADERS = re.compile(
    r"    headers: \{\n"
    r"        'Content-Type': 'application/json',\n"
    r"        \.\.\.(options\??)\.headers\n"
    r"    \}\n"
)
FORM_DATA_HEADERS = (
    "    ...formDataBodySerializer,\n"
    "    headers: {\n"
    "        'Content-Type': null,\n"
    "        ...\\1.headers\n"
    "    }\n"
)


def split_operations(content: str) -> list[str]:
    """Split the file into one chunk per `export const` declaration.

    Chunking keeps each substitution inside the operation it belongs to. A regex
    spanning the whole file can jump the boundary between operations and patch —
    or claim to have already patched — the wrong one.
    """
    starts = [m.start() for m in re.finditer(re.escape(OPERATION_START), content)]
    if not starts:
        return [content]

    bounds = [0] + starts + [len(content)]
    return [content[bounds[i] : bounds[i + 1]] for i in range(len(bounds) - 1)]


def patch(content: str, data_types: set[str]) -> tuple[str, set[str], int]:
    """Return (patched content, Data types left unpatched, number patched)."""
    chunks = split_operations(content)
    remaining = set(data_types)
    patched = 0

    for index, chunk in enumerate(chunks):
        match = DATA_TYPE.search(chunk)
        if not match or match.group(1) not in remaining:
            continue

        data_type = match.group(1)

        if "...formDataBodySerializer," in chunk:
            # Already applied — a standalone re-run over patched output.
            remaining.discard(data_type)
            continue

        new_chunk, count = JSON_HEADERS.subn(FORM_DATA_HEADERS, chunk, count=1)
        if count:
            chunks[index] = new_chunk
            remaining.discard(data_type)
            patched += count

    content = "".join(chunks)

    if patched and SERIALIZER_IMPORT not in content:
        # Anchor on the stable './client.gen' import. The type-only './client'
        # import varies with the spec's generated type list and codegen version.
        content = content.replace(CLIENT_IMPORT, f"{CLIENT_IMPORT}\n{SERIALIZER_IMPORT}", 1)

    return content, remaining, patched


def main() -> None:
    if len(sys.argv) < 3:
        print(f"Usage: {sys.argv[0]} <sdk.gen.ts> <DataType> [<DataType> ...]", file=sys.stderr)
        sys.exit(1)

    sdk_file = sys.argv[1]
    data_types = {name for name in sys.argv[2:] if name}

    with open(sdk_file) as f:
        original = f.read()

    content, unpatched, patched = patch(original, data_types)

    if content != original:
        with open(sdk_file, "w") as f:
            f.write(content)

    if patched:
        print(f"  Fixed {patched} file upload endpoint(s) in: {sdk_file}")

    if unpatched:
        print(
            f"ERROR: {sdk_file} has file-upload operations that could not be patched "
            "for multipart/form-data:",
            file=sys.stderr,
        )
        for name in sorted(unpatched):
            print(f"  - {name}", file=sys.stderr)
        print(
            "The generated output no longer matches the expected shape. Fix the "
            "substitution in this script rather than shipping these operations as JSON — "
            "they would upload an empty body.",
            file=sys.stderr,
        )
        sys.exit(1)


if __name__ == "__main__":
    main()
