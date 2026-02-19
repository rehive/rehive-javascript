#!/usr/bin/env bash

set -euo pipefail

# Generates OpenAPI clients with @hey-api/openapi-ts directly into src/*/openapi-ts.
# Runtime API files in src/*/rehive-*-api.ts are compat adapters over these outputs.

GENERATOR="npx --yes @hey-api/openapi-ts@latest"

generate() {
  local name="$1"
  local input="$2"
  local output_dir="$3"

  echo "Generating ${name} -> ${output_dir}"
  rm -rf "${output_dir}"
  ${GENERATOR} \
    --input "${input}" \
    --output "${output_dir}" \
    --client @hey-api/client-fetch \
    --plugins @hey-api/typescript \
    --plugins @hey-api/sdk
}

generate "platform-user" "https://api.rehive.com/schema.json" "src/platform/user/openapi-ts"
generate "platform-admin" "https://api.rehive.com/admin/schema.json" "src/platform/admin/openapi-ts"
generate "conversion" "https://conversion.services.rehive.com/schema.json" "src/extensions/conversion/openapi-ts"
generate "mass-send" "https://mass-send.services.rehive.com/schema.json" "src/extensions/mass-send/openapi-ts"
generate "notifications" "https://notification.services.rehive.com/schema.json" "src/extensions/notifications/openapi-ts"
generate "products" "https://product.services.rehive.com/schema.json" "src/extensions/products/openapi-ts"
generate "rewards" "https://reward.services.rehive.com/schema.json" "src/extensions/rewards/openapi-ts"
generate "stellar" "https://stellar.services.rehive.com/swagger/?format=openapi" "src/extensions/stellar/openapi-ts"
generate "stellar-testnet" "https://stellar-testnet.services.rehive.com/swagger/?format=openapi" "src/extensions/stellar-testnet/openapi-ts"
generate "business" "https://business.services.rehive.com/schema.json" "src/extensions/business/openapi-ts"
generate "payment-requests" "https://payment-requests.services.rehive.com/schema.json" "src/extensions/payment-requests/openapi-ts"
generate "bridge" "https://bridge.services.rehive.com/schema.json" "src/extensions/bridge/openapi-ts"
generate "app" "https://app.services.rehive.com/schema.json" "src/extensions/app/openapi-ts"

echo "Done. OpenAPI output updated in src/platform/*/openapi-ts and src/extensions/*/openapi-ts."
