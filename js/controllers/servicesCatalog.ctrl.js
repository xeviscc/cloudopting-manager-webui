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

                    //Function to get to publish a new service
                    $scope.goToPublish = function(){
                        //Redirect to publication
                        $location.path('/publish');
                    };

                    //Function to go to the instances detail.
                    $scope.goToEdit = function(appId) {
                        //TODO: Save the ID on a place where edit can get it.


                        //Redirect to instances
                        //$location.path('/edit');
                    }

                    //Function to go to the instances detail.
                    $scope.goToInstanceList = function(appId) {
                        //TODO: Save the ID on a place where instances can get it.


                        //Redirect to instances
                        $location.path('/instances');
                    }
                    //Function to go to the instances detail.
                    $scope.goToDelete = function(appId) {
                        //TODO: Save the ID on a place where delete can get it.


                        //Redirect to instances
                        //$location.path('/delete');
                    }
                    //Function to go to the instances detail.
                    $scope.goToCreateInstance = function(appId) {
                        //TODO: Save the ID on a place where createinstance can get it.


                        //Redirect to instances
                        //$location.path('/createinstance');
                    }
                }
            ]
        );
    }
);