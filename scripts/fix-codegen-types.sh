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
# Fix Content-Type for multipart/form-data endpoints.
#
# The generator always picks the first content type from the spec (usually
# application/json) and hardcodes it in sdk.gen.ts.  For endpoints whose
# request body contains Blob | File fields the correct content type is
# multipart/form-data so the browser/runtime can encode the file properly.
#
# Approach:
#   1. Scan types.gen.ts to find *Data types whose body references a type
#      that contains "Blob | File".
#   2. In sdk.gen.ts, find the corresponding function (matched via
#      Options<DataType>) and replace the Content-Type header.
# ---------------------------------------------------------------------------

echo "Fixing Content-Type for multipart/form-data endpoints..."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for types_file in src/*/openapi-ts/types.gen.ts src/*/*/openapi-ts/types.gen.ts; do
  [ -f "$types_file" ] || continue

  dir="$(dirname "$types_file")"
  sdk_file="${dir}/sdk.gen.ts"
  [ -f "$sdk_file" ] || continue

  # Collect Data type names whose body type contains Blob | File.
  # Uses a small Python helper to parse the TypeScript reliably.
  multipart_data_types=$(python3 "${SCRIPT_DIR}/find-multipart-types.py" "$types_file")

  if [ -z "$multipart_data_types" ]; then
    continue
  fi

  count=0
  while IFS= read -r data_type; do
    [ -z "$data_type" ] && continue

    # In sdk.gen.ts each function looks like:
    #   Options<FooData, ThrowOnError>) => ...({
    #       ...
    #       headers: {
    #           'Content-Type': 'application/json',
    #
    # We need to replace 'application/json' with 'multipart/form-data'
    # only within the block for this specific data type.
    if python3 -c "
import re, sys

with open('$sdk_file') as f:
    content = f.read()

data_type = '$data_type'

# Match the function block that references this Data type and contains
# the Content-Type header.  We look for Options<DataType, ...> followed
# (within the same function body) by 'Content-Type': 'application/json'.
pattern = (
    r\"(Options<\" + re.escape(data_type) + r\",.*?'Content-Type': )'application/json'\"
)
new_content, n = re.subn(pattern, r\"\1'multipart/form-data'\", content, flags=re.DOTALL)

if n > 0:
    with open('$sdk_file', 'w') as f:
        f.write(new_content)
    sys.exit(0)
else:
    sys.exit(1)
"; then
      count=$((count + 1))
    fi
  done <<< "$multipart_data_types"

  if [ "$count" -gt 0 ]; then
    echo "  Fixed ${count} multipart endpoint(s) in: ${sdk_file}"
  fi
done

echo "Done. Multipart Content-Type headers updated."
