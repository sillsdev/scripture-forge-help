#!/bin/bash

set -euxo pipefail

npm install
npm run build

# Locales and their destination directories
declare -A directory_for_locale=(
    ["en"]="manual"
    ["es"]="es/manual"
    ["fr"]="fr/manual"
    ["pt_BR"]="pt-BR/manual"
)

locales=("${!directory_for_locale[@]}")
for locale in "${locales[@]}"; do
    mkdir --parents "build/${directory_for_locale[$locale]}"
    cp -r s3/$locale/* "build/${directory_for_locale[$locale]}"
done
