define(['app'],
    function(app) {
        app.controller('LoginCtrl', ['$scope', 'AuthenticationService',
                function ($scope, AuthenticationService) {

                    'use strict';

                    $scope.login = function (user) {
                        console.log("Initializing login function.");
                        //Get the user from the Middleware.

                        //If exists, check the role.
                        AuthenticationService.login({name: user.name, password: user.password, role: 'admin'});

                        //If does not exists, show error message.
                    }
                }
            ]
        )
    }
);