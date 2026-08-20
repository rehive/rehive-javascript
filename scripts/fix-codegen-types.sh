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

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Find all generated types.gen.ts files in client/ directories
for types_file in src/*/openapi-ts/client/types.gen.ts src/*/*/openapi-ts/client/types.gen.ts; do
  [ -f "$types_file" ] || continue

  # 1. Change default TResponseStyle from 'fields' to 'data' in all generic signatures.
  #    Done in python, not `sed -i`: the in-place flag needs an empty suffix argument
  #    on BSD sed and must not have one on GNU sed, so no single invocation runs on
  #    both macOS and Linux. This loop used the BSD form, which meant the whole
  #    script died on the first file under `set -e` on Linux.
  python3 - "$types_file" <<'PY'
import sys

path = sys.argv[1]
with open(path) as f:
    content = f.read()

patched = content.replace(
    "TResponseStyle extends ResponseStyle = 'fields'",
    "TResponseStyle extends ResponseStyle = 'data'",
)
if patched != content:
    with open(path, 'w') as f:
        f.write(patched)
PY

  echo "  Fixed: $types_file"
done

echo "Done. Generated type defaults updated."

# ---------------------------------------------------------------------------
# Fix file upload endpoints to use formDataBodySerializer.
#
# The generator hardcodes 'Content-Type': 'application/json' and uses
# jsonBodySerializer for all endpoints. For endpoints whose request body
# contains Blob | File fields, we need to:
#   1. Use formDataBodySerializer so the body object is converted to FormData
#   2. Delete the Content-Type header so the browser/runtime automatically
#      sets it to multipart/form-data with the correct boundary
#
# Approach:
#   1. Scan types.gen.ts to find *Data types whose body references a type
#      that contains "Blob | File" (find-multipart-types.py).
#   2. In sdk.gen.ts, add the formDataBodySerializer import, replace the
#      Content-Type header with null (to delete it from merged headers),
#      and spread formDataBodySerializer into the request options
#      (apply-multipart-serializer.py).
#
# Both steps fail loudly. A file-upload operation that goes unpatched compiles
# and runs fine, it just uploads nothing — so a silent miss here is invisible
# until a user reports a lost document. That is exactly how 4.5.0 shipped
# usersDocumentsCreate / usersUpdate / usersPartialUpdate as JSON.
# ---------------------------------------------------------------------------

echo "Fixing file upload endpoints to use formDataBodySerializer..."

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

  # shellcheck disable=SC2086 # word splitting is intentional: one arg per type
  python3 "${SCRIPT_DIR}/apply-multipart-serializer.py" "$sdk_file" $multipart_data_types
done

echo "Done. File upload endpoints updated."
