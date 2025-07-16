#!/bin/bash

# Usage:
#   ./deploy.sh --prod           # Deploy to production
#   ./deploy.sh --alias foo      # Deploy to alias 'foo'
#   ./deploy.sh                  # Deploy to random preview URL

set -euxo pipefail

if [[ -z "${NETLIFY_AUTH_TOKEN:-}" ]]; then
  echo "Error: NETLIFY_AUTH_TOKEN is not set."
  exit 1
fi


# The preview branch uses a completely separate site ID in a completely separate Netlify account, in order to allow the
# production GitHub environment to have tighter security controls than the preview environment. 
# (Netlify personal access tokens do not have granular permissions)
if [[ -z "${NETLIFY_SITE_ID:-}" ]]; then
  export NETLIFY_SITE_ID=aba3890d-2b7b-4144-883f-7c600965db82
fi

DEPLOY_DIR="build"
CMD="npx netlify deploy --dir $DEPLOY_DIR"


if [[ ${#@} -eq 0 ]]; then
  # No arguments: deploy to random preview URL
  :
elif [[ "$1" == "--prod" ]]; then
  CMD+=" --prod"
elif [[ "$1" == "--alias" ]]; then
  if [[ -z "${2:-}" ]]; then
    echo "Error: --alias requires a subdomain argument."
    exit 1
  fi
  CMD+=" --alias $2"
elif [[ -n "${1:-}" ]]; then
  echo "Error: Unknown argument: $1"
  exit 1
fi

eval "$CMD"
