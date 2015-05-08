angular.module('webui', [])
    .controller('RegisterController', function(){
        this.name;
        this.password;

        this.register = function register() {
            window.alert("Sending register request! ");
        }
    });