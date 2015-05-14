define(
    [
        'angular',
        'angular_route',
        'angular_ui_router',
        'lodash',
        'ng_file_upload_all'
    ],
    function(angular) {
        var app = angular.module('webui',
            [
                'ui.router',
                'ngFileUpload'
            ]
        );

        //Setting the ng-app to index.html dynamically
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['webui']);
        });

        return app;
    }
);