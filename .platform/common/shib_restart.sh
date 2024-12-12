#!/usr/bin/env bash

set -e

#echo "Checking Shibboleth configuration..."
#if [[ -n $(shibd -t) ]]; then
#  echo "Error in Shibboleth configuration! Aborting..."
#  exit 1
#fi

echo "Restarting the shibd service..."
systemctl restart shibd.service
