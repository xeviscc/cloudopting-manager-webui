# Install NPM without sudo
(Taken from http://competa.com/blog/2014/12/how-to-run-npm-without-sudo/)

If NPM is not installed yet skip step 1.

1. You will need to reinstall all packages, so, what are you going to need to reinstall?
    1. run `npm list -g --depth=0` and something like this will appear:
    ```
    /usr/lib
    |__ bower@1.3.12
    |__ grunt-cli@0.1.13
    |__ gulp@3.8.10
    |__ npm@1.4.28
    |__ yo@1.3.3
    ```
2. Tell npm to install packages to home
    1. The first step is to get it to install to your home directory instead.
        1. run `npm config set prefix ~/npm`
3. Fix your paths
    1. Open your .bashrc (Linux) or .bash_profile (Mac, if you haven't created a .bashrc file) file for editing:
    ```
    nano ~/.bashrc
    nano ~/.bash_profile
    ```
    2. Add the following lines:
    ```
    export PATH="$PATH:$HOME/npm/bin"
    export NODE_PATH="$NODE_PATH:$HOME/npm/lib/node_modules"
    ```
    3. Save the file and then enter this command to make the changes take effect:
    ```
    . ~/.bashrc
    . ~/.bash_profile
    ```
4. Take ownership
    1. Optionally check to see if anything is owned by root:
    ```
    ls -la ~/.npm
    ```
    2. Take ownership of everything in your ~/.npm directory (must be run with sudo):
    ```
    sudo chown -R $USER:`id -g -n $USER` ~/.npm
    ```
5. Reinstall your global packages like so (no sudo necessary):
```
npm install -g bower
npm install -g grunt-cli
npm install -g gulp
npm install -g yo
```
