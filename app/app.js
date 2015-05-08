(function(){
    var app = angular.module('webui', /*['ngRoute']*/

         [
         // controllers
         'detailServiceController',
         'instancesServiceCatalogController',
         'loginController',
         'publishServiceController',
         'serviceAddDeployFormController',
         'serviceCatalogListController',
         'servicesCatalogController',
         'serviceSubscriberOperateController',
         'subscribeServiceTaylorFormController',
         'topMenuController',
         'toscaListController',
         'registerController'
         ]
    );
/*
APPROACH FOR TEMPLATING VIEWS
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                controller: 'loginController',
                templateUrl: 'login.html'
            })

            .when("/register", {
                controller: "reservedPackagesController",
                templateUrl: "reservedpackages.html"
            })

            .when("/publishedPackages", {
                controller: "registerController",
                templateUrl: "register.html"
            }).otherwise({ redirectTo: '/'});
    }]);
    */

    /*
     app.module('webui', [])
     .controller('LoginController', function(){
     this.name;
     this.password;

     this.login = function login() {
     window.alert("Sending login request! ");
     }
     });
     */


})();