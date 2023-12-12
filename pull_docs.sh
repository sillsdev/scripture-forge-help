#!/bin/bash

set -euxo pipefail

# Download the help files from Notion
npm install
npx docu-notion -n $SF_HELP_NOTION_TOKEN -r $SF_HELP_NOTION_ROOT_PAGE_ID

# Needed for the current version of docu-notion; this can be removed once it publishes a new release
sed -i s/:::📝/:::note/g docs/*.md

mkdir -p s3
aws s3 sync s3://help.scriptureforge.org s3
