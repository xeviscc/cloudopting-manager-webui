define(
    [
        'app',
        'services/rest-api-wrap'
    ],
    function(app) {
        app.controller('RegisterCtrl', ['$scope', '$log', 'AuthenticationService', 'RestApi',
                function ($scope, $log, AuthenticationService, RestApi) {
                    'use strict';

                    //Call to the middleware to get the roles
                    $scope.roleList = RestApi.roles();

                    $scope.register = function (user) {
                        //Check if two passwords match.
                        if (user.password !== user.password_two) {
                            $scope.error="The passowrds does not mathc! Type it again.";
                        }
                        else {
                            //Send registration to the server.
                            var b = RestApi.register(user);
                            if(b){
                                $scope.error='';
                            }
                            else {
                                $scope.error="Something went wrong, try in a few minutes.";
                            }
                        }
                    }
                }
            ]
        )
    }
);