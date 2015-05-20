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

                    $scope.saveConfiguration = function () {
                        //Send file.
                        $scope.upload($scope.files);
                        //$log.debug('Changing to PublishTwo view.');
                        $state.go('publish_two');

                    };

                    /*
                     * WIZARD - SCREEN TWO
                     */

                    $scope.contentLib_names = [];

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

                        $scope.deleteLib = function (a){
                            console.log("delete " + a);

                        };
                    };




                    $scope.publishService = function () {
                        console.log($scope.contentLib);
                    };
                }
            ]
        );
    }
);