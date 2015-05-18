define(
    [
        'app'
    ],
    function(app) {
        app.controller('LoginCtrl',
            ['$cookies', '$scope', '$state', 'AuthenticationService',
                function ($cookies, $scope, $state, AuthenticationService) {
                    'use strict';

                    var cookie = $cookies.webui_component_cookie;
                    if(cookie){
                        var userWithRole = AuthenticationService.login(angular.fromJson(cookie));
                        if(userWithRole) {
                            //Change page
                            $state.go('serviceCatalogList');
                        }
                    }

                    $scope.login = function (user) {
                        console.log("Initializing login function.");
                        //If exists, check the role.
                        var userWithRole = AuthenticationService.login(user);

                        if(userWithRole) {
                            //Set cookie
                            $cookies.webui_component_cookie = angular.toJson(userWithRole);

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