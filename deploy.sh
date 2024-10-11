#!/bin/bash

set -euxo pipefail

# NETLIFY_AUTH_TOKEN must be set in the environment
export NETLIFY_SITE_ID=aba3890d-2b7b-4144-883f-7c600965db82

if [ "$#" -eq 1 ] && [ "$1" == "--github-action-preview-subdomain" ]; then
    npx netlify deploy --dir build --alias github-action-preview
else
    npx netlify deploy --dir build
fi
