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
