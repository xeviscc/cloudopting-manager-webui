define(
    [
        'app'
    ],
    function(app) {
        app.controller('PublishServiceCtrl',
            ['$scope', '$state', '$log', 'Upload',
                function ($scope, $state, $log, Upload) {
                    'use strict';

                    /*
                     * WIZARD - SCREEN ONE
                     */
                    /*
                     $scope.$watch('files', function () {
                     $scope.bk_files = $scope.files;
                     //$scope.upload($scope.files);
                     });
                     */


                    var uploadImage = function () {
                        if ($scope.files && $scope.files.length) {
                            for (var i = 0; i < $scope.files.length; i++) {
                                var file = $scope.files[i];
                                Upload.upload({
                                    url: 'upload/url',
                                    fields: {'name': $scope.name, 'description': $scope.description},
                                    file: file
                                }).progress(function (evt) {
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                                }).success(function (data, status, headers, config) {
                                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                                });
                            }
                        }
                    };

                    $scope.saveConfigurationWizardOne = function () {
                        //Send file.
                        uploadImage();
                        //$log.info("Name: " + $scope.name);
                        //$log.info("Description: " + $scope.description);
                        //if($scope.files) $log.info("Filename: " + $scope.files[0].name);

                        //testing application
                        //applicationTest();



                        $state.go('publish2');
                    };


                    /*
                     * WIZARD - SCREEN TWO
                     */

                    $scope.libraryList = [];

                    $scope.isLibraryEmpty = function() {
                        return $scope.libraryList.length==0;
                    };

                    $scope.$watch(
                        function() {
                            return $scope.contentLib;
                        },
                        function(newVal, oldVal)
                        {
                            if($scope.contentLib) {
                                $scope.libraryList.push.apply($scope.libraryList, $scope.contentLib);
                            }
                        },
                        true
                    );

                    $scope.uploadContentLibrary = function () {
                        if ($scope.libraryList && $scope.libraryList.length) {
                            for (var i = 0; i < $scope.libraryList.length; i++) {
                                var file = $scope.libraryList[i];
                                Upload.upload({
                                    url: 'upload/url',
                                    file: file
                                }).progress(function (evt) {
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                                }).success(function (data, status, headers, config) {
                                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                                });
                            }
                        }
                    };

                    $scope.saveConfigurationWizardTwo = function () {
                        //Send files.
                        $scope.uploadContentLibrary();
                        /*
                         if ($scope.libraryList && $scope.libraryList.length) {
                         for (var i = 0; i < $scope.libraryList.length; i++) {
                         var file = $scope.libraryList[i];
                         $log.info("Filename: " + file.name);
                         }
                         }
                         */
                        $state.go('publish3');
                    };


                    /*
                     $scope.$watch('contentLib', function () {
                     if($scope.contentLib !== undefined && $scope.contentLib !== null) {
                     $scope.contentLib = $scope.contentLib.slice().concat($scope.contentLib_bkp).concat($scope.contentLib.slice());
                     }
                     //$scope.upload($scope.files);
                     });
                     */

                    $scope.getContentLibrary = function (){
                        $scope.cFiles = $scope.contentLib;

                    };

                    $scope.deleteLib = function (file){
                        console.log("delete " + file.name);
                        var index = $scope.libraryList.indexOf(file);
                        if (index > -1) {
                            $scope.libraryList.splice(index, 1);
                        }
                    };


                    /*
                     * WIZARD - SCREEN THREE
                     */


                    $scope.aveConfiguration = function () {
                        //Do not move. Stay.

                    };


                    $scope.publishService = function () {
                        console.log($scope.contentLib);
                    };


                    var applicationTest = function() {
                        //
                        var appliactionJSON =
                            '{' +
                                '"id": 0,' +
                                '"applicationMedias": [' +
                                    '{' +
                                        '"applicationId": "Applications",' +
                                        '"mediaContent": [ "" ],' +
                                        '"id": 0' +
                                    '}' +
                                '],' +
                                '"customizationss": [' +
                                    '{' +
                                        '"id": 0,' +
                                        '"applicationId": "Applications",' +
                                        '"statusId": {' +
                                            '"id": 0,' +
                                            '"applicationss": [' +
                                                '"Applications"' +
                                            '],' +
                                            '"customizationss": [' +
                                                '"Customizations"' +
                                            '],' +
                                            '"status": ""' +
                                        '},' +
                                        '"customizationToscaFile": "",' +
                                        '"customizationCreation": "",' +
                                        '"customizationActivation": "",' +
                                        '"customizationDecommission": "",' +
                                        '"username": ""' +
                                    '}' +
                                '],' +
                                '"statusId": {' +
                                    '"id": 0,' +
                                    '"applicationss": [' +
                                        '"Applications"' +
                                    '],' +
                                    '"customizationss": [' +
                                        '{' +
                                            '"id": 0,' +
                                            '"applicationId": "Applications",' +
                                            '"statusId": "Status",' +
                                            '"customizationToscaFile": "",' +
                                            '"customizationCreation": "",' +
                                            '"customizationActivation": "",' +
                                            '"customizationDecommission": "",' +
                                            '"username": ""' +
                                        '}' +
                                    '],' +
                                    '"status": ""' +
                                '},' +
                                '"userId": {' +
                                    '"createdBy": "",' +
                                    '"createdDate": "",' +
                                    '"lastModifiedBy": "",' +
                                    '"lastModifiedDate": "",' +
                                    '"id": 0,' +
                                    '"login": "",' +
                                    '"firstName": "",' +
                                    '"lastName": "",' +
                                    '"email": "",' +
                                    '"activated": false,' +
                                    '"langKey": "",' +
                                    '"activationKey": ""' +
                                '},' +
                                '"applicationName": "",' +
                                '"applicationDescription": "",' +
                                '"applicationToscaTemplate": "",' +
                                '"applicationVersion": ""' +
                            '}';

                        var applicationObject = JSON.parse(appliactionJSON);

                        applicationObject.applicationName = $scope.name;
                        applicationObject.applicationDescription = $scope.description;
                        applicationObject.applicationToscaTemplate = $scope.files[0];

                        $log.debug(JSON.stringify(applicationObject));

                    };





                }
            ]
        );
    }
);