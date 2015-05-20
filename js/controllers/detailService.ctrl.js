define(
    [
        'app',
        'services/application.service'
    ],
    function(app) {
        app.controller('DetailServiceCtrl',['$translate', '$scope', '$log', '$location', 'RestApi', 'ApplicationService', 'SessionService', 'RoleService',
                function($translate, $scope, $log, $location, RestApi, ApplicationService, SessionService, RoleService) {
                    'use strict';

                    $scope.appDetail = ApplicationService.currentApplication;
                    $scope.showButton = true;

                    //IF the status of the services is "UNFINISHED" we have to set the button "GO TO EDIT" if it is the Publisher

                    if(RoleService.isRolePublisher(SessionService.role)){
                        //TODO: Define all status possible for an APPLICATION.
                        if(appDetail.status === "UNFINISHED"){
                            $scope.detail_function = function() {
                                $location.path('/publish');
                                //TODO: Set the current application to the application service?
                                //ApplicationService.currentApplication = appDetail;
                            };
                            $scope.buttonValue = $translate.instant('detail.button.completepublish');
                        } else {
                            $scope.detail_function = function() {
                                $location.path('/instances');
                            };
                            $scope.buttonValue = $translate.instant('detail.button.instances');
                        }
                    }
                    if(RoleService.isRoleAdmin(SessionService.role) || RoleService.isRoleOperator(SessionService.role))
                    {
                        $scope.detail_function = function() {
                            $location.path('/instances');
                        };
                        $scope.buttonValue = $translate.instant('detail.button.instances');
                    }
                    else if(RoleService.isRoleSubscriber(SessionService.role))
                    {
                        $scope.detail_function = function() {
                            $location.path('/subscribeServiceTaylorForm');
                        };
                        $scope.buttonValue = $translate.instant('detail.button.subscribe');
                    }
                    else
                    {
                        //hide button.
                        //If no detail_funtion is defined, the button will remain hidden.
                        $scope.showButton = false;
                    }


                }
            ]
        );
    }
);