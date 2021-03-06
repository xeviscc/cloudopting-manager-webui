define(
    [
        'angular',
        'angular_route',
        'angular_ui_router',
        'angular_cookies',
        'lodash',
        'ng_file_upload_all',
        'angular_translate',
        'angular_translate_loader_static_files'
    ],
    function(angular) {
        var app = angular.module('webui',
            [
                'ui.router',
                'ngFileUpload',
                'ngCookies',
                'pascalprecht.translate'
            ]
        );

        //Setting the ng-app to index.html dynamically
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['webui']);
        });

        return app;
    }
);