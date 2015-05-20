define(['app'],
    function(app) {
        app.controller('IndexCtrl',
            ['$location', '$scope', 'AuthenticationService', 'SessionService',
                function ($location, $scope, AuthenticationService, SessionService) {

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

                            $scope.logout = function(){
                                AuthenticationService.logout();
                                $location.path("/login");
                            };
                        },
                        true
                    );
                }
            ]
        );
    }
);