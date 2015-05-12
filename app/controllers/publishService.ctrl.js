angular.module('webui').controller('PublishServiceCtrl',['$scope', '$state', '$log',
    function($scope, $state, $log) {
        'use strict';

        $scope.saveConfiguration = function() {
            $log.debug('Changing to PublishTwo view.');
            $state.go('publish_two');
            //$location.path('/publish_two');
        }

        $scope.publishService = function() {

        }
    }]
);