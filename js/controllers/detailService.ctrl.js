define(['app'],
    function(app) {
        app.controller('DetailServiceCtrl', function () {

            this.subscribe = function subscribe() {
                window.alert("Subscribing recived! ");
            }
        })
    }
);