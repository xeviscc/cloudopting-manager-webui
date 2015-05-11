angular.module('webui').controller('LoginCtrl', ['$scope', 'AuthenticationService',
        function($scope, AuthenticationService){

            'use strict';

            this.name;
            this.password;

            this.login = function login() {
                window.alert("Sending login request! ");
            }

            $scope.loginUser = function() {
                // this should be replaced with a call to your API for user verification (or you could also do it in the service)
                AuthenticationService.login({name: 'User', role: 'user'});
            };

            $scope.loginAdmin = function() {
                // this should be replaced with a call to your API for user verification (or you could also do it in the service)
                AuthenticationService.login({name: 'Admin', role: 'admin'});
            };

        }
    ]
);