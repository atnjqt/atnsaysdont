#!/bin/bash

# Step 1. copy the config files to respective locations

echo -e "Copying Shibboleth config files to /etc/shibboleth"
cp .platform/common/metadata.xml /etc/shibboleth/metadata.xml
cp .platform/common/shibboleth2.xml /etc/shibboleth/shibboleth2.xml
cp .platform/common/attribute-map.xml /etc/shibboleth/attribute-map.xml

# Step 2. copy the certs to respective locations
#cp ./certs/sp-key.pem /etc/shibboleth/sp-key.pem
#cp ./certs/sp-cert.pem /etc/shibboleth/sp-cert.pem

# Step 3. test shibd config

#shibd -t

# Step 4. restart shibd

#systemctl restart shibd