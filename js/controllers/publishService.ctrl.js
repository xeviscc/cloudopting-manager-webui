define(
    [
        'app'
    ],
    function(app) {
        app.controller('PublishServiceCtrl', ['$scope', '$state', '$log', 'Upload',
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


                    $scope.upload = function (files) {
                        console.log(files);
                        /*
                         if (files && files.length) {
                         for (var i = 0; i < files.length; i++) {
                         var file = files[i];
                         Upload.upload({
                         url: 'upload/url',
                         //fields: {'username': $scope.username},
                         file: file
                         }).progress(function (evt) {
                         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                         console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                         }).success(function (data, status, headers, config) {
                         console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                         });
                         }
                         }
                         */
                    };

                    $scope.saveConfigurationWizardOne = function () {
                        //Send file.
                        //$scope.upload($scope.files);
                        $log.info("Name: " + $scope.name);
                        $log.info("Description: " + $scope.description);
                        if($scope.files) $log.info("Filename: " + $scope.files[0].name);

                        $state.go('publish2');
                    };


                    /*
                     * WIZARD - SCREEN TWO
                     */

                    $scope.libraryList = [];

                    $scope.isLibraryEmpty = function() {
                        return $scope.libraryList.length==0;
                    }

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

                    $scope.saveConfigurationWizardTwo = function () {
                        //Send files.
                        //$scope.upload($scope.libraryList);
                        if ($scope.libraryList && $scope.libraryList.length) {
                            for (var i = 0; i < $scope.libraryList.length; i++) {
                                var file = $scope.libraryList[i];
                                $log.info("Filename: " + file.name);
                            }
                        }

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
                }
            ]
        );
    }
);