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
                            cloudNode: {
                                name: 'Turin',
                                id: 'Turin'
                            },
                            cloudNode: {
                                name: 'Barcelona',
                                id: 'Barcelona'
                            },
                            cloudNode: {
                                name: 'Bucharest',
                                id: 'Bucharest'
                            }

                        }
                    ];
                    $scope.osList = [
                        {
                            OS: {
                                name: 'Ubuntu 14.04',
                                id: 'Ubuntu 14.04'
                            },
                            OS: {
                                name: 'CentOS 7',
                                id: 'CentOS 7'
                            },
                            OS: {
                                name: 'CoreOS 1.6',
                                id: 'CoreOS 1.6'
                            }

                        }
                    ];

                    $scope.skinList = [
                        {
                            skin: {
                                name: 'BlueSky',
                                id: 'BlueSky'
                            },
                            skin: {
                                name: 'Lemonade',
                                id: 'Lemonade'
                            },
                            skin: {
                                name: 'Violette',
                                id: 'Violette'
                            }

                        }
                    ];

                    $scope.saveTemplate = function(service) {
                        //Save the template temporarily
                        $scope.tempTemplate = service;
                    };

                    $scope.uploadTemplate = function(service) {
                        //Save the template temporarily
                        //RestApi.customizationCreate();o
                    };
                }
            ]
        )
    }
);