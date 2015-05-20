# cloudopting-manager-webui
The web interface to the cloudopting-manager

The WebUi for the CloudOpting manager will allow to:
- List services
- Subscribe to services
- Provide a service
- Operate services

## Dependencies
- required:
    - "angular": "1.3.15"
    - "angular-route": "1.3.15"
    - "angular-cookies": "1.3.15"
    - "angular-ui-router": "0.2.14"
    - "lodash": "3.8.0"
    - "requirejs": "2.1.17"
    - "ng-file-upload": "4.0.0"
    - "angular-translate": "2.7.0"
    - "angular-translate-loader-static-files": "2.7.0"

## Pre-install (in Ubuntu)
1. Install git
    1. run `sudo apt-get install git`
2. Install NPM
    1. run `sudo apt-get install npm`
3. Install http-server
    1. run `npm install -g http-server`
4. Install karma
    1. run `npm install -g karma-cli`
4. Install bower
    1. run `npm install -g bower`

## Install (in Ubuntu)
1. Clone the repository from github.
     1. run `git clone https://github.com/CloudOpting/cloudopting-manager-webui.git`
2. Go to the path.
     1. run `cd cloudopting-manager-webui`
3. Run the application (The dependencies are solved automatically)
     1. run `npm start`

*Note: If the step 3 `npm start` gives the error `/usr/bin/env: node: No such file or directory`
it might be needed to symlink it like so `sudo ln -s /usr/bin/nodejs /usr/bin/node`

The default login user/password is: **admin/admin** (role admin)

## Testing (in Ubuntu)
1. Run the test (Steps 1 and 2 from Install required)
     1. run `npm test`