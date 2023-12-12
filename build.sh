#!/bin/bash

set -euxo pipefail

npm install
npm run build

# Copy the help files to their respective locales in the build directory

# English
mkdir -p build/manual
cp -r s3/en/* build/manual

# Spanish
mkdir -p build/es/manual
cp -r s3/es/* build/es/manual

# French
mkdir -p build/fr/manual
cp -r s3/fr/* build/fr/manual

# Portuguese
mkdir -p build/pt-BR/manual
cp -r s3/pt_BR/* build/pt-BR/manual

# Locale redirects
# SF links to /en, but this new help site serves en with no en prefix
mkdir -p build/en
cp en_redirect.html build/en/index.html
# SF links to /pt_BR, but Docusaurus uses pt-BR
mkdir -p build/pt_BR
cp pt_br_redirect.html build/pt_BR/index.html
