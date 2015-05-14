define(
    [
        'app',
        'services/application.service'
    ],
    function(app) {
        app.controller('ServiceCatalogListCtrl', ['$scope', '$log', '$location', 'RestApi', 'ApplicationService',
            function ($scope, $log, $location, RestApi, ApplicationService) {
                'use strict';

                $scope.applicationList = RestApi.applicationList();

                $scope.detail = function(applicaiton){
                    //save the current application
                    //ApplicationService.setCurrentApplication(applicaiton);
                    ApplicationService.currentApplication = applicaiton;
                    //go to the detail
                    $location.path('/detail');
                }
            }
        ]
        )
    }
);