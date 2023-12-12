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
