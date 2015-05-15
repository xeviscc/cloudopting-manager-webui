define(
    [
        'app',
        'services/rest-api-wrap',
        'services/application.service'
    ],
    function(app) {
        app.controller('ServiceAddDeployFormCtrl',
            ['$scope', '$log', 'RestApi', 'ApplicationService',
                function ($scope, $log, RestApi, ApplicationService) {

                    //Get information about the specific Service
                    //RestApi.
                    //Call to the middleware to get the roles
                    //ApplicationService.currentApplication.id
                    var screen = RestApi.inputParameters(1);
                    $scope.cloudNodeList = screen.cloudNodeList;
                    $scope.osList = screen.osList;
                    $scope.skinList = screen.skinList;

                    $scope.saveTemplate = function(service) {
                        //Save the template temporarily
                        $scope.tempTemplate = service;
                    };

                    $scope.uploadTemplate = function(service) {
                        //Save the template temporarily
                        //RestApi.customizationCreate(service);
                        //$scope.message = "Service send successfully!";
                    };
                }
            ]
        )
    }
);