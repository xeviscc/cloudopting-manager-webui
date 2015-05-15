define(
    [
        'app',
        'services/application.service'
    ],
    function(app) {
        app.controller('DetailServiceCtrl',['$scope', '$log', '$location', 'RestApi', 'ApplicationService',
                function($scope, $log, $location, RestApi, ApplicationService) {
                    'use strict';

                    $scope.appDetail = ApplicationService.currentApplication;

                    $scope.subscribe = function() {
                        $location.path('/subscribeServiceTaylorForm');
                    }
                }
            ]
        )
    }
);