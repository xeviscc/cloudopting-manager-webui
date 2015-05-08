angular.module('webui', [])
    .controller('LoginController', function(){
        this.name;
        this.password;

        this.login = function login() {
            window.alert("Sending login request! ");
        }
    });