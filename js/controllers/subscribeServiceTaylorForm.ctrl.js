define(
    [
        'app',
        'services/rest-api-wrap',
        'services/application.service'
    ],
    function(app) {
        app.controller('SubscribeServiceTaylorFormCtrl',
            ['$scope', '$log', 'RestApi', 'ApplicationService',
                function ($scope, $log, RestApi, ApplicationService) {
                    'use strict';

                    if(ApplicationService.currentApplication !== undefined
                        && ApplicationService.currentApplication !== null)
                    {
                        var screen = RestApi.inputParameters(ApplicationService.currentApplication.id);
                        $scope.cloudNodeList = screen.cloudNodeList;
                        $scope.osList = screen.osList;
                        $scope.skinList = screen.skinList;
                    }
                    else
                    {
                        //Show some error or tell user to go and select a Service.
                        //throw Exception!!
                        //throw new WebUIException("Application not present.");
                    }

                    $scope.requestSubscription = function(){
                        //Request Subscription¿?
                        //RestApi.requestSubscription($scope.application);
                    }
                }
            ]
        )
    }
);