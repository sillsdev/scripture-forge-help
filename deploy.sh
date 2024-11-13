#!/bin/bash

set -euxo pipefail

if [[ -z "${NETLIFY_AUTH_TOKEN-}" ]]; then
    echo "Error: NETLIFY_AUTH_TOKEN is not set."
    exit 1
fi

export NETLIFY_SITE_ID=aba3890d-2b7b-4144-883f-7c600965db82

deploy() {
    local deploy_args=("--dir" "build")
    while (("$#")); do
        case "$1" in
        --github-action-preview-subdomain)
            deploy_args+=("--alias" "github-action-preview")
            ;;
        --prod)
            deploy_args+=("--prod")
            ;;
        *)
            echo "Error: Unknown argument: $1"
            exit 1
            ;;
        esac
        shift
    done
    npx netlify deploy "${deploy_args[@]}"
}

deploy "$@"
