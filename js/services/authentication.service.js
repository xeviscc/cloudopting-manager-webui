define(['app'],
    function(app) {
        app.factory('AuthenticationService',
            function ($http, SessionService) {
                'use strict';

                return {
                    login: function (user) {
                        if(user.name == 'admin' && user.password == 'admin') {
                            // this method could be used to call the API and set the user instead of taking it in the function params
                            SessionService.currentUser = user;
                            return true;
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