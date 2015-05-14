# cloudopting-manager-webui
The web interface to the cloudopting-manager

The WebUi for the CloudOpting manager will allow to:
- List services
- Subscribe to services
- Provide a service
- Operate services

## Dependencies
- required:
    - "angular": "~1.3.14"
    - "angular-router": "~1.3.14"
    - "angular-ui-router": "0.2.14"
    - "lodash": "3.8.0"

## Pre-install (in Ubuntu)
1. Install git
    1. run `sudo apt-get install git`
2. Install NPM
    1. run `sudo apt-get install npm`
3. Install http-server
    1. run `sudo npm install http-server -g`
4. Install karma
    1. run `sudo npm install karma-cli -g`
4. Install bower
    1. run `sudo npm install bower -g`

## Install (in Ubuntu)
1. Clone the ropository from github.
     1. run `git clone https://github.com/CloudOpting/cloudopting-manager-webui`
2. Go to the path.
     1. run `cd cloudopting-manager-webui`
3. Run the appliaction (The dependences are solved automatically)
     1. run `npm start`

*Note: If the step 3 `npm start` gives the error `/usr/bin/env: node: No such file or directory`
it might be needed to symlink it like so `sudo ln -s /usr/bin/nodejs /usr/bin/node`

## Testing (in Ubuntu)
1. Run the test (Expected steps 1 and 2 from Install section completed)
     1. run `npm test`