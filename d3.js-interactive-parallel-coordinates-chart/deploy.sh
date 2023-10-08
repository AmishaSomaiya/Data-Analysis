#!/bin/bash

# Cleans the docs directory
rm -r docs/*

# Set the source directory and destination directory
source_dir="."
dest_dir="docs"

# List of files to exclude
exclude_files=("README.md" "deploy.sh" "Images" "docs")

# Enable extended pattern matching operators
shopt -s extglob

# Create a pattern string to exclude files
exclude_pattern=$(printf "|%s" "${exclude_files[@]}")
exclude_pattern="${exclude_pattern:1}" # Remove leading '|'

# Copy all files except the excluded files
cp -r "${source_dir}"/!(${exclude_pattern}) "${dest_dir}"
