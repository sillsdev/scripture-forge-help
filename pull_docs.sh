#!/bin/bash

set -euxo pipefail

if [[ -z "${SF_HELP_NOTION_TOKEN-}" ]]; then
    echo "Error: SF_HELP_NOTION_TOKEN is not set."
    exit 1
fi
if [[ -z "${SF_HELP_NOTION_ROOT_PAGE_ID-}" ]]; then
    echo "Error: SF_HELP_NOTION_ROOT_PAGE_ID is not set."
    exit 1
fi

skip_pulling_from_s3=false
while (("$#")); do
    case "$1" in
    --skip-pulling-from-s3)
        skip_pulling_from_s3=true
        shift
        ;;
    *)
        echo "Unknown argument: $1"
        exit 1
        ;;
    esac
done

# Download the help files from Notion
npm install
npx @sillsdev/docu-notion@latest -n "${SF_HELP_NOTION_TOKEN}" -r "${SF_HELP_NOTION_ROOT_PAGE_ID}" --image-file-name-format legacy

# Needed for the current version of docu-notion; this can be removed once it publishes a new release
sed -i 's/:::📝/:::note/g' docs/*.md

# Add a div around the ReactPlayer component to make it responsive
sed -i -e '/<ReactPlayer/ s/^/<div class="player-wrapper">/' -e '/<ReactPlayer/ s/$/<\/div>/' docs/*.md

if [[ "${skip_pulling_from_s3}" = true ]]; then
    echo "Skipping pulling from S3."
else
    mkdir -p s3
    aws s3 sync --delete s3://help.scriptureforge.org s3
fi
