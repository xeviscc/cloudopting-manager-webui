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
                        $log.debug(user);
                        //Check if two passwords match.
                        if (user.password == user.password_two) {
                            window.alert("Password incorrect! Type it again");
                        } else {
                            $log.debug("IN");
                            //Send registration to the server.
                            //AuthenticationService.login({name: user.name, password: user.password, role: user.role});
                        }
                    }
                }
            ]
        )
    }
);