require.config({
    baseUrl: 'js',

    paths: {
        angular: 'libs/angular/angular',
        angular_route: 'libs/angular-route/angular-route',
        angular_ui_router: 'libs/angular-ui-router/angular-ui-router',
        lodash: 'libs/lodash/lodash'
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