define(
    [
        'app'
    ],
    function(app) {
        app.controller('SubscribeServiceTaylorFormCtrl',
            [ '$scope',
                function ($scope) {
                    'use strict';

                    $scope.requestSubscription = function(){
                        //Request Subscription¿?
                        //RestApi.requestSubscription($scope.application);
                    }
                }
            ]
        )
    }
);