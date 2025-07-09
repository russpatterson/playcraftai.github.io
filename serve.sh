#!/bin/bash

# Clean previous build
bundle exec jekyll clean

# Serve site with drafts and future posts visible (optional)
bundle exec jekyll serve --livereload

