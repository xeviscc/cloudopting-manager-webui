app.factory('RoleService', function ($http) {

    'use strict';

    var adminRoles = ['admin'];
    var subscriberRoles = ['subscriber'];
    var publisherRoles = ['publisher'];
    var operatorRoles = ['operator'];

    return {
        validateRoleAdmin: function (currentUser) {
            return currentUser ? _.contains(adminRoles, currentUser.role) : false;
        },

        validateRoleSubscriber: function (currentUser) {
            return currentUser ? _.contains(subscriberRoles, currentUser.role) : false;
        },

        validateRolePublisher: function (currentUser) {
            return currentUser ? _.contains(publisherRoles, currentUser.role) : false;
        },

        validateRoleOperator: function (currentUser) {
            return currentUser ? _.contains(operatorRoles, currentUser.role) : false;
        }
    };
});

app.factory('AuthenticationService', function ($http, SessionService) {

    'use strict';

    return {

        login: function (user) {
            // this method could be used to call the API and set the user instead of taking it in the function params
            SessionService.currentUser = user;
        },

        isLoggedIn: function () {
            return SessionService.currentUser !== null;
        }
    };
});

app.factory('SessionService', function () {

    'use strict';

    return {
        currentUser: null
    };
});