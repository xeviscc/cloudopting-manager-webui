define(
    [
        'app'
    ],
    function(app) {
        app.controller('LoginCtrl', ['$scope', '$state', 'AuthenticationService',
                function ($scope, $state, AuthenticationService) {
                    'use strict';

                    $scope.login = function (user) {
                        console.log("Initializing login function.");
                        //If exists, check the role.
                        var userWithRole = AuthenticationService.login(user);

                        if(userWithRole) {
                            //Change page
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