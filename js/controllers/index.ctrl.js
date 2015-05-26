define(['app'],
    function(app) {
        app.controller('IndexCtrl',
            ['$location', '$scope', 'AuthenticationService', 'SessionService', 'RoleService',
                function ($location, $scope, AuthenticationService, SessionService, RoleService) {

                    $scope.logoutButton = AuthenticationService.isLoggedIn();
                    $scope.name = AuthenticationService.isLoggedIn() ? SessionService.currentUser.name : '';

                    $scope.logout = function(){
                        AuthenticationService.logout();
                        $location.path("/login");
                    };

                    $scope.$watch(
                        function() {
                            return SessionService.currentUser;
                        },
                        function(newVal, oldVal)
                        {
                            $scope.logoutButton = AuthenticationService.isLoggedIn();
                            $scope.name = AuthenticationService.isLoggedIn() ? SessionService.currentUser.name : '';

                            $scope.isPublisher = function (){
                                return RoleService.isRolePublisher(SessionService.currentUser);
                            };

                            $scope.logout = function(){
                                AuthenticationService.logout();
                                $location.path("/serviceCatalogList");
                            };
                        },
                        true
                    );
                }
            ]
        );
    }
);