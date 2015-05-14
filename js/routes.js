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

                $urlRouterProvider.otherwise('/login');

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
                        templateUrl: 'templates/publish.tpl.html',
                        controller: 'PublishServiceCtrl'
                    }).
                    state('publish_two', {
                        url: '/publish_two',
                        templateUrl: 'templates/publish_two.tpl.html',
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
                var routesThatForPublic = ['/login', '/register', '/error'];
                var routesThatForAdmins = ['/detail', '/index', '/instances', '/publish',
                    '/publish_two', '/serviceAddDeploy', '/serviceCatalogList', '/servicesCatalog',
                    '/serviceSubscriberOperate', '/subscribeServiceTaylorForm', '/toscaList'];
                var routesThatForSubscribers = ['/publish'];
                var routesThatForPublishers = ['/subscribeServiceTaylorForm'];
                var routesThatForOperators = ['/instances'];

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
                            // redirect back to login
                            ev.preventDefault();
                            $location.path('/anonymous');
                        }
                        else if (RoleService.isRoleAdmin(SessionService.currentUser) && !routeAllowAdmin(to.url)) {
                            // redirect to error page
                            ev.preventDefault();
                            $location.path('/error');
                        }
                        else if (RoleService.isRoleSubscriber(SessionService.currentUser) && !routeAllowSubscriber(to.url)) {
                            // redirect to error page
                            ev.preventDefault();
                            $location.path('/error');
                        }
                        else if (RoleService.isRolePublisher(SessionService.currentUser) && !routeAllowPublisher(to.url)) {
                            // redirect to error page
                            ev.preventDefault();
                            $location.path('/error');
                        }
                        else if (RoleService.isRoleOperator(SessionService.currentUser) && !routeAllowOperator(to.url)) {
                            // redirect to error page
                            ev.preventDefault();
                            $location.path('/error');
                        }

                    }
                );
            }
        )
    }
);