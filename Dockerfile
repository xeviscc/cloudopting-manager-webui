#
# Install CloudOpting WebUI Manager
#
# https://github.com/CloudOpting/cloudopting-manager-webui
#

# Pull base image.
FROM ubuntu:14.10

MAINTAINER Xavier Cases Camats version: 0.1

#########################
#
# Install Nginx.
#
RUN \
  apt-get install -y software-properties-common && \
  add-apt-repository -y ppa:nginx/stable && \
  apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
  chown -R www-data:www-data /var/lib/nginx

#########################
#
# Install Git & npm
#
RUN apt-get update && \
    apt-get install -y nodejs npm git git-core

#########################
#
# Configure NPM
#
# Avoid failure of using legacy binary "node"
RUN ln -s /usr/bin/nodejs /usr/bin/node

#########################
#
# Install NPM packages
#

# Install dependencies
RUN npm install -g grunt bower karma-cli

#########################
#
# Install WebUI Manager
#
RUN \
  cd  && \
  git clone https://github.com/CloudOpting/cloudopting-manager-webui.git && \
  cd cloudopting-manager-webui && \
  bower install --allow-root && \
  npm install && \
  cd && \
  mv cloudopting-manager-webui/* /var/www/html

# Define mountable directories.
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Define working directory.
WORKDIR /etc/nginx

# Expose default port
EXPOSE 80
EXPOSE 443

# Define default command.
CMD ["nginx"]