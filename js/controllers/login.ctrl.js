define(
    [
        'app'
    ],
    function(app) {
        app.controller('LoginCtrl',
            ['$cookies', '$translate', '$scope', '$state', 'AuthenticationService',
                function ($cookies, $translate, $scope, $state, AuthenticationService) {
                    'use strict';

                    var userWithRole = AuthenticationService.loginByCookie();
                    if(userWithRole) {
                        //Change page
                        $state.go('serviceCatalogList');
                    }
                    //else ask for credentials

                    $scope.login = function (user) {
                        console.log("Initializing login function.");
                        //If exists, check the role.
                        var userWithRole = AuthenticationService.login(user);

                        if(userWithRole) {
                            //Change page
                            $state.go('serviceCatalogList');
                        } else {
                            //If does not exists, show error message.
                            $scope.error = $translate.instant('login.error');
                        }
                    }
                }
            ]
        )
    }
);