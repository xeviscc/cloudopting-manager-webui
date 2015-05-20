#
# Install CloudOpting WebUI Manager
#
# https://github.com/CloudOpting/cloudopting-manager-webui
#

# Pull base image.
FROM dockerfile/ubuntu

MAINTAINER Xavier Cases Camats version: 0.1

# Install Git
RUN apt-get update && \
  apt-get install -y git

# Install NPM
RUN apt-get update && \
apt-get install -y npm

# Install http-server
RUN npm install -g http-server

# Install karma-cli
RUN npm install -g karma-cli

# Install bower
RUN npm install -g bower

# Install WebUI Manager
RUN \
  cd  && \
  git clone https://github.com/CloudOpting/cloudopting-manager-webui.git && \
  cd cloudopting-manager-webui && \
  npm start && \
  cd

# Expose default port
EXPOSE 8080