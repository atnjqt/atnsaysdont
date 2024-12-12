#!/usr/bin/env bash
# Deploys Shibboleth config file if application code has changed.

set -e

source .platform/common/shib_copy_config.sh
source .platform/common/shib_restart.sh