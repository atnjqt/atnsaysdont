#!/usr/bin/env bash
# Enable Apache SSL and generate self-signed certs
# Shibboleth SP prefers to work only with SSL traffic. This Apache proxy server only communicates with the AWS load balancer, which accepts self-signed certificates. While this is an internal network, it's still a good idea to encrypt the traffic between them.
# See .platform/httpd/conf.d/vhost.conf for further SSL configuration

# PROVIDE-CONFIG
# Customize SUBJECT with your information. This self-signed cert is never presented to a user, so provide as much or as little information as you desire.  The "CN" should be your hostname $(hostname) for best results.
SUBJECT="/C=US/ST=PA/L=Philadelphia/O=ASC-UPenn/OU=AscIT/CN=$(hostname)/emailAddress=etiennej@upenn.edu"

if [[ ! -e /etc/pki/tls/certs/apache_ssl.crt ]]; then
    echo "Generating SSL certificates for Apache..."
    openssl genrsa -out /etc/pki/tls/private/apache_ssl.key 2048
    openssl req -new -out apache_ssl.csr -key /etc/pki/tls/private/apache_ssl.key -subj "${SUBJECT}"
    openssl x509 -req -in apache_ssl.csr -days 365 -signkey /etc/pki/tls/private/apache_ssl.key -out /etc/pki/tls/certs/apache_ssl.crt
    chmod 400 /etc/pki/tls/private/apache_ssl.key /etc/pki/tls/certs/apache_ssl.crt
    rm apache_ssl.csr
fi

# Remove the default elastic beanstalk configuration
# Configuration is replaced by .platform/httpd/conf.d/vhost.conf
# Not sure if this is necessary, but it's here for now.  
#rm -rf /etc/httpd/conf.d/elasticbeanstalk
