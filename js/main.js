requirejs.config({
    baseUrl: 'js',

    paths: {
        angular: 'libs/angular/angular',
        angular_route: 'libs/angular-route/angular-route',
        angular_ui_router: 'libs/angular-ui-router/release/angular-ui-router',
        lodash: 'libs/lodash/lodash',
        ng_file_upload_all: 'libs/ng-file-upload/ng-file-upload-all'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angular_route: {
            deps: ['angular'],
            exports: 'angular_route'
        },
        angular_ui_router: {
            deps: ['angular'],
            exports: 'angular_ui_router'
        },
        lodash: {
            exports: 'lodash'
        },
        ng_file_upload_all: {
            deps: ['angular'],
            exports: 'ng_file_upload_all'
        }
    },
    deps: [
        'app',
        'routes',
        'http.provider',
        'services/authentication.service',
        'services/role.service',
        'services/session.service'
    ]
});