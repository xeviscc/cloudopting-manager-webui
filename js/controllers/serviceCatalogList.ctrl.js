define(
    [
        'app',
        'services/rest-api-wrap',
        'services/application.service'
    ],
    function(app) {
        app.controller('ServiceCatalogListCtrl',
            ['$scope', '$log', '$location', 'RestApi', 'ApplicationService',
                function ($scope, $log, $location, RestApi, ApplicationService) {
                    'use strict';

                    //TODO: Change applicationListUnpaginated to applicationList once it is developed properly
                    $scope.applicationList = RestApi.applicationListUnpaginated();

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