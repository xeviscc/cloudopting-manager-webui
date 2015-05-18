requirejs.config({
    baseUrl: 'js',

    paths: {
        angular: 'libs/angular/angular',
        angular_route: 'libs/angular-route/angular-route',
        angular_ui_router: 'libs/angular-ui-router/release/angular-ui-router',
        angular_cookies: 'libs/angular-cookies/angular-cookies',
        lodash: 'libs/lodash/lodash',
        ng_file_upload_all: 'libs/ng-file-upload/ng-file-upload-all',
        angular_translate: 'libs/angular-translate/angular-translate',
        angular_translate_loader_static_files: 'libs/angular-translate-loader-static-files/angular-translate-loader-static-files'
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
        },
        angular_cookies: {
            deps: ['angular'],
            exports: 'angular_cookies'
        },
        angular_translate: {
            deps: ['angular'],
            exports: 'angular_translate'
        },
        angular_translate_loader_static_files: {
            deps: ['angular', 'angular_translate'],
            exports: 'angular_translate_loader_static_files'
        }

    },
    deps: [
        'app',
        'routes',
        'http.provider',
        'services/authentication.service',
        'services/role.service',
        'services/session.service',
        'services/exceptions',
        'translate.provider'
    ]
});