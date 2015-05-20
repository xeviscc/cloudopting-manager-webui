define(
    [
        'app',
        'services/rest-api-wrap',
        'services/application.service'
    ],
    function(app) {
        app.controller('ServicesCatalogCtrl',
            ['$scope', '$log', '$location', 'RestApi', 'ApplicationService',
                function ($scope, $log, $location, RestApi, ApplicationService) {
                    'use strict';

                    //TODO: Change applicationListUnpaginated to applicationList once it is developed properly
                    $scope.applicationList = RestApi.applicationListUnpaginated();

                    //TODO: Implement button "Search Service" functionality.

                    //TODO: Implement button go for each instance.
                }
            ]
        );
    }
);