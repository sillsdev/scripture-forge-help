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

pull_from_s3=false
while (("$#")); do
    case "$1" in
    --skip-pulling-from-s3)
        pull_from_s3=true
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

# Add a div around the ReactPlayer component to make it responsive
sed -i -e '/<ReactPlayer/ s/^/<div class="player-wrapper">/' -e '/<ReactPlayer/ s/$/<\/div>/' docs/**/*.md docs/*.md

if [[ "${pull_from_s3}" = true ]]; then
    mkdir -p s3
    aws s3 sync --delete s3://help.scriptureforge.org s3
else
    echo "Skipping pulling from S3."
fi

# Write en translation files to update any sidebar/footer changes to be translated by Crowdin
npm run write-translations

# copy docs to crowdin/Guides/docusaurus-plugin-content-docs/current
source ./copy_docs.sh

# copy i18n/en to respective crowdin folders
cp -f i18n/en/docusaurus-plugin-content-docs/current.json crowdin/Guides/docusaurus-plugin-content-docs/current.json

cp -f i18n/en/docusaurus-theme-classic/footer.json crowdin/Guides/docusaurus-theme-classic/footer.json
cp -f i18n/en/docusaurus-theme-classic/navbar.json crowdin/Guides/docusaurus-theme-classic/navbar.json

cp -f i18n/en/code.json crowdin/Guides/code.json

# cleanup by removing i18n/en to prevent docusaurus conflicts
if [[ -d i18n/en ]]; then
    rm -r i18n/en
else
    echo "i18n/en does not exist"
fi