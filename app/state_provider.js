app.config(function($stateProvider, $urlRouterProvider){

    'use strict';

    $urlRouterProvider.otherwise('/login');

    $stateProvider.
        state('login',{
            url: '/login',
            templateUrl: 'login.tpl.html',
            controller: 'LoginCtrl'
        }).
        state('register',{
            url: '/register',
            templateUrl: 'register.tpl.html',
            controller: 'RegisterCtrl'
        }).
        state('detail',{
            url: '/detail',
            templateUrl: 'detail.tpl.html',
            controller: 'DetailServiceCtrl'
        }).
        state('publish',{
            url: '/publish',
            templateUrl: 'publish.tpl.html',
            controller: 'PublishServiceCtrl'
        }).
        state('publish_two',{
            url: '/publish_two',
            templateUrl: 'publish_two.tpl.html',
            controller: 'PublishServiceCtrl'
        }).
        state('serviceCatalogList',{
            url: '/serviceCatalogList',
            templateUrl: 'serviceCatalogList.tpl.html',
            controller: 'ServiceCatalogListCtrl'
        }).
        state('subscribeServiceTaylorForm',{
            url: '/subscribeServiceTaylorForm',
            templateUrl: 'subscribeServiceTaylorForm.tpl.html',
            controller: 'SubscribeServiceTaylorFormCtrl'
        }).
        state('serviceSubscriberOperate',{
            url: '/logserviceSubscriberOperatein',
            templateUrl: 'serviceSubscriberOperate.tpl.html',
            controller: 'ServiceSubscriberOperateCtrl'
        }).
        state('instances',{
            url: '/instances',
            templateUrl: 'instances.tpl.html',
            controller: 'InstancesCtrl'
        }).
        state('servicesCatalog',{
            url: '/servicesCatalog',
            templateUrl: 'servicesCatalog.tpl.html',
            controller: 'ServicesCatalogCtrl'
        }).
        state('error', {
            url: '/error',
            templateUrl: 'error.html'
        });
});

app.run(function ($rootScope, $location, AuthenticationService, RoleService, SessionService) {

    'use strict';

    // enumerate routes that don't need authentication
    var routesThatDontRequireAuth = ['/login', '/register', '/error'];
    var routesThatForAdmins = ['/detaul', '/index', '/instances', '/publish',
        '/publish_two', '/serviceAddDeploy', '/serviceCatalogList', '/servicesCatalog',
        '/serviceSubscriberOperate', '/subscribeServiceTaylorForm', '/toscaList'];
    var routesThatForSubscribers = ['/publish'];
    var routesThatForPublishers = ['/subscribeServiceTaylorForm'];
    var routesThatForOperators = ['/instances'];

    // check if current location matches route
    var routeClean = function(route) {
        return _.find(routesThatDontRequireAuth,
            function (noAuthRoute) {
                return _.startsWith(route, noAuthRoute);
            });
    };
    // check if route requires admin privileges
    var routeAdmin = function(route) {
        return _.find(routesThatForAdmins,
            function (noAuthRoute) {
                return _.startsWith(route, noAuthRoute);
            });
    };
    // check if route requires subscriber privileges
    var routeSubscriber = function(route) {
        return _.find(routesThatForSubscribers,
            function (noAuthRoute) {
                return _.startsWith(route, noAuthRoute);
            });
    };
    // check if route requires publisher privileges
    var routePublisher = function(route) {
        return _.find(routesThatForPublishers,
            function (noAuthRoute) {
                return _.startsWith(route, noAuthRoute);
            });
    };
    // check if route requires operator privileges
    var routeOperator = function(route) {
        return _.find(routesThatForOperators,
            function (noAuthRoute) {
                return _.startsWith(route, noAuthRoute);
            });
    };

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
        // if route requires auth and user is not logged in
        if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
            // redirect back to login
            $location.path('/login');
        }
        else if (routeAdmin($location.url()) && !RoleService.validateRoleAdmin(SessionService.currentUser)) {
            // redirect to error page
            $location.path('/error');
        }
        else if (routeSubscriber($location.url()) && !RoleService.validateRoleSubscriber(SessionService.currentUser)) {
            // redirect to error page
            $location.path('/error');
        }
        else if (routePublisher($location.url()) && !RoleService.validateRolePublisher(SessionService.currentUser)) {
            // redirect to error page
            $location.path('/error');
        }
        else if (routeOperator($location.url()) && !RoleService.validateRoleOperator(SessionService.currentUser)) {
            // redirect to error page
            $location.path('/error');
        }
    });
});