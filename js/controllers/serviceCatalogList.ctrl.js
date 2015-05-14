define(['app'],
    function(app) {
        app.controller('ServiceCatalogListCtrl', ['$scope', '$log', 'RestApi',
            function ($scope, $log, RestApi) {
                $scope.applicationList = RestApi.applicationList();
            }
        ])
    }
);