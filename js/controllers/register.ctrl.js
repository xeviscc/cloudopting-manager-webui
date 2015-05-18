define(
    [
        'app',
        'services/rest-api-wrap'
    ],
    function(app) {
        app.controller('RegisterCtrl',
            ['$scope', '$translate', '$log', 'AuthenticationService', 'RestApi',
                function ($scope, $translate, $log, AuthenticationService, RestApi) {
                    'use strict';

                    //Call to the middleware to get the roles
                    $scope.roleList = RestApi.roles();

                    $scope.register = function (user) {
                        //Check if the two passwords match.
                        if (user.password !== user.password_two) {
                            $scope.error = $translate.instant('register.error.password');
                        }
                        else {
                            //Send registration to the server.
                            var b = RestApi.register(user);
                            if(b){
                                $scope.error='';
                            }
                            else {
                                $scope.error = $translate.instant('register.error.unknown');
                            }
                        }
                    }
                }
            ]
        )
    }
);