#!/usr/bin/env bash
# Updates Shibboleth configuration in case the related environment variables are changed

set -e

source ".platform/common/shib_copy_config.sh"
source ".platform/common/shib_restart.sh"
