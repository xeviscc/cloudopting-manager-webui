define(
    [
        'app',
        'services/application.service'
    ],
    function(app) {
        app.controller('DetailServiceCtrl',['$scope', '$log', '$state', 'RestApi', 'ApplicationService',
                function($scope, $log, $state, RestApi, ApplicationService) {
                    'use strict';

                    $scope.appDetail = ApplicationService.currentApplication;

                    $scope.subscribe = function() {
                        window.alert("Subscribing recived! ");
                        //Request Subscription
                        //RestApi.requestSubscription($scope.application);
                    }
                }
            ]
        )
    }
);