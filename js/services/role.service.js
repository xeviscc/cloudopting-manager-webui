define(['app'],
    function(app) {
        app.factory('RoleService',
            function ($http) {
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
            }
        )
    }
);