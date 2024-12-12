#!/usr/bin/env bash
# Copies the shibboleth2.xml configuration file from the project repository to the Shibboleth installation

set -e

echo "Copying shibboleth configuration..."
if [[ ! -e ./.platform/common/shibboleth2.xml ]]; then
  echo "ERROR: shibboleth2.xml configuration file not found: $(realpath ./shibboleth2.xml)"
  exit 1
fi
cp ./.platform/common/shibboleth2.xml /etc/shibboleth/shibboleth2.xml
