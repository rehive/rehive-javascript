#!/usr/bin/env python3
"""Find Data types in a generated types.gen.ts whose body type contains Blob | File.

Prints one Data type name per line to stdout.

Usage: python3 find-multipart-types.py <types.gen.ts>
"""

import re
import sys


def main() -> None:
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <types.gen.ts>", file=sys.stderr)
        sys.exit(1)

    with open(sys.argv[1]) as f:
        content = f.read()

    # Step 1: Find all type names whose body contains "Blob | File".
    #
    # Type blocks look like:
    #   export type FooRequest = {
    #       ...
    #       icon?: Blob | File | null;
    #       ...
    #   };
    #
    # We match top-level type blocks (handling one level of nested braces for
    # inline object types like metadata?: { [key: string]: unknown }).
    blob_types: set[str] = set()
    type_pattern = re.compile(
        r"export type (\w+) = \{((?:[^{}]|\{[^{}]*\})*)\}", re.DOTALL
    )
    for m in type_pattern.finditer(content):
        name = m.group(1)
        body = m.group(2)
        if "Blob | File" in body:
            blob_types.add(name)

    if not blob_types:
        return

    # Step 2: Find *Data types whose `body` field references one of the blob types.
    #
    # Data types look like:
    #   export type CurrenciesPartialUpdateData = {
    #       body?: PatchedAdminUpdateAssetRequestWritable;
    #       ...
    #   };
    data_pattern = re.compile(
        r"export type (\w+Data) = \{[^}]*\bbody\??: (\w+);", re.DOTALL
    )
    for m in data_pattern.finditer(content):
        data_name = m.group(1)
        body_type = m.group(2)
        if body_type in blob_types:
            print(data_name)


if __name__ == "__main__":
    main()
