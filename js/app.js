define(
    [
        'angular',
        'angular_route',
        'angular_ui_router',
        'lodash'
    ],
    function(angular) {
        var app = angular.module('webui',
            [
                'ui.router'
            ]
        );

        angular.element(document).ready(function() {
            angular.bootstrap(document, ['webui']);
        });

        return app;
    }
);