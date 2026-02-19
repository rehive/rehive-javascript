#!/bin/bash

# Script to regenerate all API clients from swagger specifications.
# This will regenerate both platform APIs and all extension APIs.
#
# Prerequisites:
#   npm install -g swagger-typescript-api
#
# Usage:
#   ./scripts/generate-all.sh           # Generate all APIs
#   ./scripts/generate-all.sh extensions # Generate only extensions
#   ./scripts/generate-all.sh platform   # Generate only platform APIs
#   ./scripts/generate-all.sh billing    # Generate a specific extension

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"

STA_FLAGS="--templates ./swagger-templates --extract-request-params --extract-response-error --extract-response-body"

generate_extension() {
    local name="$1"
    local schema_url="$2"
    local output_dir="$3"
    local api_name="$4"

    echo "Generating $name extension..."
    mkdir -p "$output_dir"
    npx swagger-typescript-api generate \
        $STA_FLAGS \
        --path "$schema_url" \
        --output "$output_dir" \
        --name "$api_name"
    echo "  ✓ $name extension generated"
}

generate_platform() {
    echo "=== Generating Platform APIs ==="

    echo "Generating Platform User API..."
    npx swagger-typescript-api generate \
        $STA_FLAGS \
        --path https://api.rehive.com/schema.json \
        --output src/platform/user/ \
        --name rehive-platform-user-api
    echo "  ✓ Platform User API generated"

    echo "Generating Platform Admin API..."
    npx swagger-typescript-api generate \
        $STA_FLAGS \
        --path https://api.rehive.com/admin/schema.json \
        --output src/platform/admin/ \
        --name rehive-platform-admin-api
    echo "  ✓ Platform Admin API generated"

    echo ""
}

generate_extensions() {
    echo "=== Generating Extension APIs ==="

    generate_extension "Conversion" \
        "https://conversion.services.rehive.com/schema.json" \
        "src/extensions/conversion/" \
        "rehive-conversion-api"

    generate_extension "Mass Send" \
        "https://mass-send.services.rehive.com/schema.json" \
        "src/extensions/mass-send/" \
        "rehive-mass-send-api"

    generate_extension "Notifications" \
        "https://notification.services.rehive.com/schema.json" \
        "src/extensions/notifications/" \
        "rehive-notifications-api"

    generate_extension "Products" \
        "https://product.services.rehive.com/schema.json" \
        "src/extensions/products/" \
        "rehive-products-api"

    generate_extension "Rewards" \
        "https://reward.services.rehive.com/schema.json" \
        "src/extensions/rewards/" \
        "rehive-rewards-api"

    generate_extension "Stellar Mainnet" \
        "https://stellar.services.rehive.com/swagger/?format=openapi" \
        "src/extensions/stellar/" \
        "rehive-stellar-api"

    generate_extension "Stellar Testnet" \
        "https://stellar-testnet.services.rehive.com/swagger/?format=openapi" \
        "src/extensions/stellar-testnet/" \
        "rehive-stellar-testnet-api"

    generate_extension "Business" \
        "https://business.services.rehive.com/schema.json" \
        "src/extensions/business/" \
        "rehive-business-api"

    generate_extension "Payment Requests" \
        "https://payment-requests.services.rehive.com/schema.json" \
        "src/extensions/payment-requests/" \
        "rehive-payment-requests-api"

    generate_extension "Bridge" \
        "https://bridge.services.rehive.com/schema.json" \
        "src/extensions/bridge/" \
        "rehive-bridge-api"

    generate_extension "App" \
        "https://app.services.rehive.com/schema.json" \
        "src/extensions/app/" \
        "rehive-app-api"

    generate_extension "Billing" \
        "https://billing.services.rehive.com/schema.json" \
        "src/extensions/billing/" \
        "rehive-billing-api"

    generate_extension "Builder" \
        "https://builder.services.rehive.com/schema.json" \
        "src/extensions/builder/" \
        "rehive-builder-api"

    generate_extension "Alchemy" \
        "https://alchemy.services.rehive.com/schema.json" \
        "src/extensions/alchemy/" \
        "rehive-alchemy-api"

    generate_extension "Rain" \
        "https://rain.services.rehive.com/schema.json" \
        "src/extensions/rain/" \
        "rehive-rain-api"

    echo ""
}

# Parse command line arguments
TARGET="${1:-all}"

case "$TARGET" in
    all)
        generate_platform
        generate_extensions
        ;;
    platform)
        generate_platform
        ;;
    extensions)
        generate_extensions
        ;;
    conversion|mass-send|notifications|products|rewards|stellar|stellar-testnet|business|payment-requests|bridge|app|billing|builder|alchemy|rain)
        # Generate a specific extension
        case "$TARGET" in
            conversion)      generate_extension "Conversion" "https://conversion.services.rehive.com/schema.json" "src/extensions/conversion/" "rehive-conversion-api" ;;
            mass-send)       generate_extension "Mass Send" "https://mass-send.services.rehive.com/schema.json" "src/extensions/mass-send/" "rehive-mass-send-api" ;;
            notifications)   generate_extension "Notifications" "https://notification.services.rehive.com/schema.json" "src/extensions/notifications/" "rehive-notifications-api" ;;
            products)        generate_extension "Products" "https://product.services.rehive.com/schema.json" "src/extensions/products/" "rehive-products-api" ;;
            rewards)         generate_extension "Rewards" "https://reward.services.rehive.com/schema.json" "src/extensions/rewards/" "rehive-rewards-api" ;;
            stellar)         generate_extension "Stellar Mainnet" "https://stellar.services.rehive.com/swagger/?format=openapi" "src/extensions/stellar/" "rehive-stellar-api" ;;
            stellar-testnet) generate_extension "Stellar Testnet" "https://stellar-testnet.services.rehive.com/swagger/?format=openapi" "src/extensions/stellar-testnet/" "rehive-stellar-testnet-api" ;;
            business)        generate_extension "Business" "https://business.services.rehive.com/schema.json" "src/extensions/business/" "rehive-business-api" ;;
            payment-requests) generate_extension "Payment Requests" "https://payment-requests.services.rehive.com/schema.json" "src/extensions/payment-requests/" "rehive-payment-requests-api" ;;
            bridge)          generate_extension "Bridge" "https://bridge.services.rehive.com/schema.json" "src/extensions/bridge/" "rehive-bridge-api" ;;
            app)             generate_extension "App" "https://app.services.rehive.com/schema.json" "src/extensions/app/" "rehive-app-api" ;;
            billing)         generate_extension "Billing" "https://billing.services.rehive.com/schema.json" "src/extensions/billing/" "rehive-billing-api" ;;
            builder)         generate_extension "Builder" "https://builder.services.rehive.com/schema.json" "src/extensions/builder/" "rehive-builder-api" ;;
            alchemy)         generate_extension "Alchemy" "https://alchemy.services.rehive.com/schema.json" "src/extensions/alchemy/" "rehive-alchemy-api" ;;
            rain)            generate_extension "Rain" "https://rain.services.rehive.com/schema.json" "src/extensions/rain/" "rehive-rain-api" ;;
        esac
        ;;
    *)
        echo "Usage: $0 [all|platform|extensions|<extension-name>]"
        echo ""
        echo "Extensions: conversion, mass-send, notifications, products, rewards,"
        echo "            stellar, stellar-testnet, business, payment-requests,"
        echo "            bridge, app, billing, builder, alchemy, rain"
        exit 1
        ;;
esac

echo "=== Generation complete ==="
echo ""
echo "Next steps:"
echo "  1. Run 'npm run build' to build the SDK"
echo "  2. Run 'npm test' to verify everything works"
