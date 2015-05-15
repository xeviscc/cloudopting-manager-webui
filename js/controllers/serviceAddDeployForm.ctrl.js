define(
    [
        'app',
        'services/rest-api-wrap'
    ],
    function(app) {
        app.controller('ServiceAddDeployFormCtrl',
            ['$scope', '$log', 'RestApi',
                function ($scope, $log, RestApi) {

                    //Get information about the specific Service
                    //RestApi.
                    //Call to the middleware to get the roles
                    $scope.cloudNodeList = [
                        {
                            name: 'Turin',
                            id: 'Turin'
                        },
                        {
                            name: 'Barcelona',
                            id: 'Barcelona'
                        },
                        {
                            name: 'Bucharest',
                            id: 'Bucharest'
                        }
                    ];
                    $scope.osList = [
                        {
                            name: 'Ubuntu 14.04',
                            id: 'Ubuntu 14.04'
                        },
                        {
                            name: 'CentOS 7',
                            id: 'CentOS 7'
                        },
                        {
                            name: 'CoreOS 1.6',
                            id: 'CoreOS 1.6'
                        }
                    ];

                    $scope.skinList = [
                        {
                            name: 'BlueSky',
                            id: 'BlueSky'
                        },
                        {
                            name: 'Lemonade',
                            id: 'Lemonade'
                        },
                        {
                            name: 'Violette',
                            id: 'Violette'
                        }
                    ];

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