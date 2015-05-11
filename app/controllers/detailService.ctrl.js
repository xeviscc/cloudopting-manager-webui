angular.module('webui', [])
    .controller('DetailServiceCtrl', function(){

        this.subscribe = function subscribe() {
            window.alert("Subscribing recived! ");
        }
    });