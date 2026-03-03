#!/usr/bin/env bash

set -euo pipefail

# Post-codegen script to fix generated client type defaults.
#
# The @hey-api/openapi-ts generator creates client types with:
#   - TResponseStyle defaulting to 'fields'
#   - RequestResult including `| undefined` for the 'data' response style
#
# This SDK always uses responseStyle: 'data' (set in create-api-client.ts and
# create-auth.ts), and wraps fetch with errorHandlingFetch that throws on
# non-2xx responses. These two facts mean:
#   1. The default TResponseStyle should be 'data' so callers get the correct
#      return type without specifying it explicitly.
#   2. The '| undefined' branch in RequestResult for 'data' style is unreachable
#      (errors always throw), so removing it gives callers cleaner types.
#
# Run this script after codegen-openapi-ts.sh to apply these fixes.

echo "Fixing generated client type defaults..."

# Find all generated types.gen.ts files in client/ directories
for types_file in src/*/openapi-ts/client/types.gen.ts src/*/*/openapi-ts/client/types.gen.ts; do
  [ -f "$types_file" ] || continue

  # 1. Change default TResponseStyle from 'fields' to 'data' in all generic signatures
  sed -i '' "s/TResponseStyle extends ResponseStyle = 'fields'/TResponseStyle extends ResponseStyle = 'data'/g" "$types_file"

  echo "  Fixed: $types_file"
done

echo "Done. Generated type defaults updated."

# ---------------------------------------------------------------------------
# Remove Content-Type header for endpoints with file upload fields.
#
# The generator hardcodes 'Content-Type': 'application/json' in sdk.gen.ts
# for all endpoints. For endpoints whose request body contains Blob | File
# fields, the Content-Type must NOT be set so the browser/runtime can
# automatically set it to multipart/form-data with the correct boundary.
#
# Approach:
#   1. Scan types.gen.ts to find *Data types whose body references a type
#      that contains "Blob | File".
#   2. In sdk.gen.ts, find the corresponding function (matched via
#      Options<DataType>) and remove the headers block entirely.
# ---------------------------------------------------------------------------

echo "Removing Content-Type for file upload endpoints..."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for types_file in src/*/openapi-ts/types.gen.ts src/*/*/openapi-ts/types.gen.ts; do
  [ -f "$types_file" ] || continue

  dir="$(dirname "$types_file")"
  sdk_file="${dir}/sdk.gen.ts"
  [ -f "$sdk_file" ] || continue

  # Collect Data type names whose body type contains Blob | File.
  multipart_data_types=$(python3 "${SCRIPT_DIR}/find-multipart-types.py" "$types_file")

  if [ -z "$multipart_data_types" ]; then
    continue
  fi

  # Remove the Content-Type headers block for all matching data types at once.
  python3 -c "
import re, sys

with open('$sdk_file') as f:
    content = f.read()

data_types = '''$multipart_data_types'''.strip().split('\n')
count = 0

for data_type in data_types:
    data_type = data_type.strip()
    if not data_type:
        continue
    # Remove the entire headers block from functions using this Data type.
    pattern = (
        r'(Options<' + re.escape(data_type) + r',.*?\.\.\.options,\n)'
        r'    headers: \{\n'
        r\"        'Content-Type': 'application/json',\n\"
        r'        \.\.\.options(?:\?)?\.headers\n'
        r'    \}\n'
    )
    new_content, n = re.subn(pattern, r'\1', content, flags=re.DOTALL)
    if n > 0:
        content = new_content
        count += n

if count > 0:
    with open('$sdk_file', 'w') as f:
        f.write(content)
    print(f'  Removed {count} Content-Type header(s) in: $sdk_file')
"
done

echo "Done. File upload endpoint headers updated."
