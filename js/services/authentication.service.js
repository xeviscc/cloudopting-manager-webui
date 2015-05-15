define(
    [
        'app'
    ],
    function(app) {
        app.factory('AuthenticationService',
            function($http, SessionService, RestApi) {
                'use strict';

                return {
                    login: function (user) {
                        //Call the rest component to check if the user is valid.
                        var userWithRole = RestApi.login(user);

                        //if it is valid, save it and return true.
                        if(userWithRole) {
                            SessionService.currentUser = userWithRole;
                            return userWithRole;
                        }
                        return false;
                    },

                    isLoggedIn: function () {
                        return SessionService.currentUser !== null;
                    }
                };
            }
        )
    }
);