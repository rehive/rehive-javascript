#!/bin/bash

# Script to replace generated http-client.ts files with shared client re-exports
# This ensures all APIs use the customized shared HTTP client

set -e

# Function to create http-client.ts with appropriate import path
create_http_client() {
    local file_path="$1"
    local import_path="$2"
    
    cat > "$file_path" << EOF
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

// Re-export the shared HTTP client
export * from '$import_path';
EOF
    
    echo "✓ Updated $file_path"
}

# Platform APIs
if [ -f "src/platform/user/http-client.ts" ]; then
    create_http_client "src/platform/user/http-client.ts" "../../shared/http-client.js"
fi

if [ -f "src/platform/admin/http-client.ts" ]; then
    create_http_client "src/platform/admin/http-client.ts" "../../shared/http-client.js"
fi

# Extensions
if [ -d "src/extensions" ]; then
    for ext_dir in src/extensions/*/; do
        if [ -f "${ext_dir}http-client.ts" ]; then
            create_http_client "${ext_dir}http-client.ts" "../../shared/http-client.js"
        fi
    done
fi

echo "All http-client.ts files have been updated to use the shared HTTP client."re