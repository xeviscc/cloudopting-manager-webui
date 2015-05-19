define(
    [
        'app'
    ],
    function(app) {
        app.controller('LoginCtrl',
            ['$cookies', '$translate', '$scope', '$location', 'AuthenticationService', 'RoleService',
                function ($cookies, $translate, $scope, $location, AuthenticationService, RoleService) {
                    'use strict';

                    var userWithRole = AuthenticationService.loginByCookie();
                    if(userWithRole) {
                        //Change page
                        changePage(userWithRole);
                    }
                    //else ask for credentials

                    $scope.login = function (user) {
                        console.log("Initializing login function.");
                        //If exists, check the role.
                        var userWithRole = AuthenticationService.login(user);

                        if(userWithRole) {
                            //Change page
                            changePage(userWithRole);
                        } else {
                            //If does not exists, show error message.
                            $scope.error = $translate.instant('login.error');
                        }
                    };

                    /**
                     * Private function to change location depending on the role.
                     * @param user
                     */
                    function changePage(user) {
                        if(RoleService.isRoleAdmin(user)
                            || RoleService.isRoleSubscriber(user))
                        {
                            $location.path('/serviceCatalogList');
                        }
                        else if(RoleService.isRoleOperator(user))
                        {
                            $location.path('/instances');
                        }
                        else if(RoleService.isRolePublisher(user))
                        {
                            $location.path('/servicesCatalog');
                        }
                        else
                        {
                            $location.path('/serviceCatalogList');
                        }
                    }
                }
            ]
        )
    }
);