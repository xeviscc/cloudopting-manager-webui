define(['app'],
    function(app) {
        app.controller('LoginCtrl', ['$scope', '$state', 'AuthenticationService',
                function ($scope, $state, AuthenticationService) {

                    'use strict';

                    $scope.login = function (user) {
                        console.log("Initializing login function.");
                        //Get the user from the Middleware.

                        //If exists, check the role.
                        var b = AuthenticationService.login({name: user.name, password: user.password, role: 'admin'});

                        if(b) {
                            $state.go('serviceCatalogList');
                        } else {
                            //If does not exists, show error message.
                            $scope.error = "Login incorrect!";
                        }
                    }
                }
            ]
        )
    }
);