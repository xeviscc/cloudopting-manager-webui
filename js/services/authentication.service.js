define(
    [
        'app'
    ],
    function(app) {
        app.factory('AuthenticationService',
            function($cookies, $http, SessionService, RestApi) {
                'use strict';

                return {
                    loginByCookie: function() {
                        var cookie = $cookies.webui_component_cookie;

                        if(cookie!==null && cookie!==undefined && cookie!=="null") {
                            return this.login(angular.fromJson(cookie));
                        } else {
                            return false;
                        }
                    },

                    login: function (user) {
                        //Call the rest component to check if the user is valid.
                        var userWithRole = RestApi.login(user);

                        //if it is valid, save it and return true.
                        if(userWithRole) {
                            SessionService.currentUser = userWithRole;
                            $cookies.webui_component_cookie = angular.toJson(userWithRole);
                            return userWithRole;
                        }
                        return false;
                    },

                    logout: function() {
                        SessionService.currentUser = null;
                        $cookies.webui_component_cookie = null;
                    },

                    isLoggedIn: function () {
                        return SessionService.currentUser !== null;
                    }
                };
            }
        );
    }
);