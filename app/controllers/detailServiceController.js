angular.module('webui', [])
    .controller('detailServiceController', function(){

        this.subscribe = function subscribe() {
            window.alert("Subscribing recived! ");
        }
    });