#!/usr/bin/env bash
# Installs shibboleth and retrieves secrets

set -e

echo "Checking if Shibboleth is installed..."
if ! yum list installed shibboleth; then
  echo "Installing shibboleth..."

  # Install Shibboleth based on the Amazon Linux 2023 instructions
  # See here: https://shibboleth.net/downloads/service-provider/RPMS/
  cp .platform/common/shibboleth.repo /etc/yum.repos.d/shibboleth.repo
  chcon system_u:object_r:system_conf_t:s0 /etc/yum.repos.d/shibboleth.repo
  chown root:root /etc/yum.repos.d/shibboleth.repo

  #yum update
  yum -y install shibboleth.x86_64 -y

  # Remove pre-generated keys and certs
  rm /etc/shibboleth/*.pem
else
  echo "Shibboleth is already installed"
fi
