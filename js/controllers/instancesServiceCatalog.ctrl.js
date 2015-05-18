define(
    [
        'app',
        'services/rest-api-wrap',
        'services/application.service'
    ],
    function(app) {
        app.controller('InstancesServiceCatalogCtrl',
            ['$scope', '$log', '$location', 'RestApi', 'ApplicationService',
                function ($scope, $log, $location, RestApi, ApplicationService) {
                    'use strict';

                    //TODO: Change instancesList to applicationList once it is developed properly?¿?
                    $scope.instancesList = RestApi.instancesList();

                    //TODO: Implement button "Search Service" functionality.

                    //TODO: Implement button go for each instance.
                }
            ]
        )
    }
);