#!/bin/bash

set -euxo pipefail

# Download the help files from Notion
npm install
npx @sillsdev/docu-notion@latest -n $SF_HELP_NOTION_TOKEN -r $SF_HELP_NOTION_ROOT_PAGE_ID --image-file-name-format legacy

# Needed for the current version of docu-notion; this can be removed once it publishes a new release
sed -i s/:::📝/:::note/g docs/*.md

mkdir -p s3
aws s3 sync --delete s3://help.scriptureforge.org s3
