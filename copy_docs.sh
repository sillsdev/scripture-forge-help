#!/bin/bash

SOURCE_DIR=docs/
DEST_DIR=crowdin/Guides/docusaurus-plugin-content-docs/current

copy_docs() {
    # Copy the docs to the crowdin folder
    # We are only concerned with markdown files and the special getting-started files.
    # If we have additional files we can add them here until this solution is no longer tenable.
    find "$1" -type f \( -name "*.md" -o -name "*.mdx" -o -name "getting-started.json" \) | while read -r file; do
        # We want to keep the docs directory structure when we copy files to the crowdin directory. 
        # We create the subdirectories here if they do not exist
        copy_path=$(dirname "${file#$1}")
        if [ "$copy_path" == "." ]; then
            echo "Copying $file to $DEST_DIR/"
        else
            echo "Copying $file to $DEST_DIR/$copy_path/"
            mkdir -p "$DEST_DIR/$copy_path"
        fi
        
        # Copy the doc file to the respective crowdin folder
        cp -f "$file" "$DEST_DIR/$copy_path"
    done
}

copy_docs "$SOURCE_DIR"

echo "Files copied successfully."