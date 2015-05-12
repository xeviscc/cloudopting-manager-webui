angular.module('webui').controller('LoginCtrl', ['$scope', 'AuthenticationService',
        function($scope, AuthenticationService){

            'use strict';

            $scope.login = function(user) {
                AuthenticationService.login({name: user.name, password: user.password, role: 'admin'});
            }
        }
    ]
);