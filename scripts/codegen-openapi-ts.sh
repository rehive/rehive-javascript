#!/usr/bin/env bash

set -euo pipefail

# Generates OpenAPI clients with @hey-api/openapi-ts directly into src/*/openapi-ts.
# Runtime API files in src/*/rehive-*-api.ts are compat adapters over these outputs.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Use the repo-local generator, not `npx @latest`. openapi-ts resolves `typescript`
# from the surrounding tree; npx installs its own and picks the newest allowed by
# the peer range (>=6.0.0), which is TS 7 and breaks the generator. The devDependency
# keeps it on the pinned typescript ^5.x.
GENERATOR="${REPO_ROOT}/node_modules/.bin/openapi-ts"

if [[ ! -x "${GENERATOR}" ]]; then
  echo "Missing ${GENERATOR}. Run 'npm install' first." >&2
  exit 1
fi

cleanup_tmp() {
  find "${REPO_ROOT}/src" -type d -name '*.openapi-ts-tmp' -exec rm -rf {} + 2>/dev/null || true
}
trap cleanup_tmp EXIT

FAILED=()

# Generates one service. A failure here is isolated: the service keeps its
# existing committed output, the name is recorded in FAILED, and the remaining
# services still generate. A single unhealthy schema endpoint (builder has
# returned HTTP 500 for a while) must not skip every service after it in the
# list, nor skip the fix-codegen-types.sh pass that the already-generated
# output depends on.
generate() {
  local name="$1"
  local input="$2"
  local output_dir="$3"
  local tmp_dir="${output_dir}.openapi-ts-tmp"

  echo "Generating ${name} -> ${output_dir}"

  # Retry on failure: fetching a spec over the network blips often enough that a
  # single miss would skip an otherwise healthy service and leave its client stale.
  local attempt
  for attempt in 1 2 3; do
    # Generate into a temp dir and swap on success, so a failed run leaves the
    # existing committed output intact instead of deleting it.
    rm -rf "${tmp_dir}"
    if "${GENERATOR}" \
      --input "${input}" \
      --output "${tmp_dir}" \
      --client @hey-api/client-fetch \
      --plugins @hey-api/typescript \
      --plugins @hey-api/sdk; then
      rm -rf "${output_dir}"
      mv "${tmp_dir}" "${output_dir}"
      return 0
    fi
    if [[ ${attempt} -lt 3 ]]; then
      echo "  ${name}: attempt ${attempt} failed, retrying in $((attempt * 5))s" >&2
      sleep $((attempt * 5))
    fi
  done

  echo "  SKIPPED ${name}: generation failed after 3 attempts, keeping existing ${output_dir}" >&2
  rm -rf "${tmp_dir}"
  FAILED+=("${name}")
  return 0
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
generate "billing"  "https://billing.services.rehive.com/schema.json"  "src/extensions/billing/openapi-ts"
generate "builder"  "https://builder.services.rehive.com/schema.json"  "src/extensions/builder/openapi-ts"
generate "rain"     "https://rain.services.rehive.com/schema.json"     "src/extensions/rain/openapi-ts"
generate "alchemy"  "https://alchemy.services.rehive.com/schema.json"  "src/extensions/alchemy/openapi-ts"
generate "sumsub"   "https://sumsub.services.rehive.com/schema.json"   "src/extensions/sumsub/openapi-ts"
generate "mukuru"   "https://mukuru.services.rehive.com/schema.json"   "src/extensions/mukuru/openapi-ts"

# Apply post-codegen type fixes (responseStyle defaults, etc.)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
"${SCRIPT_DIR}/fix-codegen-types.sh"

echo "Done. OpenAPI output updated in src/platform/*/openapi-ts and src/extensions/*/openapi-ts."

if [[ ${#FAILED[@]} -gt 0 ]]; then
  echo >&2
  echo "WARNING: ${#FAILED[@]} service(s) could not be generated and kept their existing output:" >&2
  for name in ${FAILED[@]+"${FAILED[@]}"}; do
    echo "  - ${name}" >&2
  done
  echo "Re-run codegen for these once their schema endpoints are healthy." >&2
  exit 1
fi
