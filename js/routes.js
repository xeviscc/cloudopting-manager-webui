define([
        'app',
        'controllers/detailService.ctrl',
        'controllers/index.ctrl',
        'controllers/instancesServiceCatalog.ctrl',
        'controllers/login.ctrl',
        'controllers/publishService.ctrl',
        'controllers/register.ctrl',
        'controllers/serviceAddDeployForm.ctrl',
        'controllers/serviceCatalogList.ctrl',
        'controllers/servicesCatalog.ctrl',
        'controllers/serviceSubscriberOperate.ctrl',
        'controllers/subscribeServiceTaylorForm.ctrl',
        'controllers/toscaList.ctrl'
    ],
    function(app) {
        app.config(
            function ($stateProvider, $urlRouterProvider) {
                'use strict';

                $urlRouterProvider.otherwise('/serviceCatalogList');

                $stateProvider.
                    state('login', {
                        url: '/login',
                        templateUrl: 'templates/login.tpl.html',
                        controller: 'LoginCtrl'
                    }).
                    state('register', {
                        url: '/register',
                        templateUrl: 'templates/register.tpl.html',
                        controller: 'RegisterCtrl'
                    }).
                    state('detail', {
                        url: '/detail',
                        templateUrl: 'templates/detail.tpl.html',
                        controller: 'DetailServiceCtrl'
                    }).
                    state('publish', {
                        url: '/publish',
                        templateUrl: 'templates/publish_one.tpl.html',
                        controller: 'PublishServiceCtrl'
                    }).
                    state('publish2', {
                        url: '/publish_two',
                        templateUrl: 'templates/publish_two.tpl.html',
                        controller: 'PublishServiceCtrl'
                    }).
                    state('publish3', {
                        url: '/publish_two',
                        templateUrl: 'templates/publish_three.tpl.html',
                        controller: 'PublishServiceCtrl'
                    }).
                    state('serviceCatalogList', {
                        url: '/serviceCatalogList',
                        templateUrl: 'templates/serviceCatalogList.tpl.html',
                        controller: 'ServiceCatalogListCtrl'
                    }).
                    state('subscribeServiceTaylorForm', {
                        url: '/subscribeServiceTaylorForm',
                        templateUrl: 'templates/subscribeServiceTaylorForm.tpl.html',
                        controller: 'SubscribeServiceTaylorFormCtrl'
                    }).
                    state('serviceSubscriberOperate', {
                        url: '/serviceSubscriberOperate',
                        templateUrl: 'templates/serviceSubscriberOperate.tpl.html',
                        controller: 'ServiceSubscriberOperateCtrl'
                    }).
                    state('instances', {
                        url: '/instances',
                        templateUrl: 'templates/instances.tpl.html',
                        controller: 'InstancesServiceCatalogCtrl'
                    }).
                    state('serviceAddDeployForm', {
                        url: '/serviceAddDeployForm',
                        templateUrl: 'templates/serviceAddDeploy.tpl.html',
                        controller: 'ServiceAddDeployFormCtrl'
                    }).
                    state('servicesCatalog', {
                        url: '/servicesCatalog',
                        templateUrl: 'templates/servicesCatalog.tpl.html',
                        controller: 'ServicesCatalogCtrl'
                    }).
                    state('error', {
                        url: '/error',
                        templateUrl: 'templates/error.html'
                    }
                );
            }
        );

        app.run(
            function ($rootScope, $location, $state, AuthenticationService, RoleService, SessionService) {
                'use strict';

                // enumerate routes that don't need authentication
                var routesThatForPublic = ['/login', '/register', '/error', '/serviceCatalogList'];

                var routesThatForAdmins = ['/detail', '/instances', '/publish',
                    '/publish2', '/publish3', '/serviceAddDeploy', '/serviceCatalogList', '/servicesCatalog',
                    '/serviceSubscriberOperate', '/subscribeServiceTaylorForm', '/toscaList',
                    '/serviceAddDeployForm', '/error'];

                var routesThatForPublishers = ['/servicesCatalog', '/publish', '/publish2', '/publish3', '/instances', '/serviceCatalogList', '/error'];

                var routesThatForSubscribers = ['/subscribeServiceTaylorForm', '/error', '/serviceCatalogList'];

                var routesThatForOperators = ['/error', '/serviceCatalogList'];

                // check if current location matches route
                var routeAllowedPublic = function (route) {
                    return _.find(routesThatForPublic,
                        function (noAuthRoute) {
                            return _.startsWith(route, noAuthRoute);
                        });
                };
                // check if route requires admin privileges
                var routeAllowAdmin = function (route) {
                    return _.find(routesThatForAdmins,
                        function (noAuthRoute) {
                            return _.startsWith(route, noAuthRoute);
                        });
                };
                // check if route requires subscriber privileges
                var routeAllowSubscriber = function (route) {
                    return _.find(routesThatForSubscribers,
                        function (noAuthRoute) {
                            return _.startsWith(route, noAuthRoute);
                        });
                };
                // check if route requires publisher privileges
                var routeAllowPublisher = function (route) {
                    return _.find(routesThatForPublishers,
                        function (noAuthRoute) {
                            return _.startsWith(route, noAuthRoute);
                        });
                };
                // check if route requires operator privileges
                var routeAllowOperator = function (route) {
                    return _.find(routesThatForOperators,
                        function (noAuthRoute) {
                            return _.startsWith(route, noAuthRoute);
                        });
                };

                $rootScope.$on('$stateChangeStart',
                    function (ev, to, toParams, from, fromParams) {
                        if (!routeAllowedPublic(to.url) && !AuthenticationService.isLoggedIn()) {
                            redirectTo(ev, '/login');
                        }
                        else if (RoleService.isRoleAdmin(SessionService.currentUser) && !routeAllowAdmin(to.url)) {
                            redirectTo(ev, '/error');
                        }
                        else if (RoleService.isRoleSubscriber(SessionService.currentUser) && !routeAllowSubscriber(to.url)) {
                            redirectTo(ev, '/error');
                        }
                        else if (RoleService.isRolePublisher(SessionService.currentUser) && !routeAllowPublisher(to.url)) {
                            redirectTo(ev, '/error');
                        }
                        else if (RoleService.isRoleOperator(SessionService.currentUser) && !routeAllowOperator(to.url)) {
                            redirectTo(ev, '/error');
                        }
                    }
                );

                //Workaround for redirecting: https://github.com/angular/angular.js/issues/9607
                var redirectTo = function (ev, location) {
                    ev.preventDefault();
                    $rootScope.$evalAsync(function () {
                        $location.path(location);
                    });
                };
            }
        );
    }
);