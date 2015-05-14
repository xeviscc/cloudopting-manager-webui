# Install node without sudo
(Taken from http://competa.com/blog/2014/12/how-to-run-npm-without-sudo/)

If NPM is already installed skip step 1.

1. You will need to reinstall all packages, so, what are you going to need to reinstall?

    1. run `npm list -g --depth=0`

Something like this will appear:
`
/usr/lib
??? bower@1.3.12
??? grunt-cli@0.1.13
??? gulp@3.8.10
??? npm@1.4.28
??? yo@1.3.3
`

2. Tell npm to install packages to home

    1. The first step is to get it to install to your home directory instead.
        1. run `npm config set prefix ./npm`
    2. Fix your paths
    `
# open your .bashrc (Linux) or .bash_profile (Mac) file for editing:
nano ~/.bashrc # for Linux
# or...
nano ~/.bash_profile # for Mac if you haven't created a .bashrc file

# add these lines:
export PATH="$PATH:$HOME/npm/bin"
export NODE_PATH="$NODE_PATH:$HOME/npm/lib/node_modules"

# save the file and then enter this command to make the changes take effect:
. ~/.bashrc
# or...
. ~/.bash_profile
`

    3. Take ownership

`
# optionally check to see if anything is owned by root:
ls -la ~/.npm

# take ownership of everything in your ~/.npm directory (must be run with sudo):
sudo chown -R $USER:`id -g -n $USER` ~/.npm
`

    4. Reinstall your global packages

`
# no sudo necessary :)
npm install -g bower
npm install -g grunt-cli
npm install -g gulp
npm install -g yo
`