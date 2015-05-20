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
                    isRoleAdmin: function (currentUser) {
                        return currentUser ? _.contains(adminRoles, currentUser.role) : false;
                    },

                    isRoleSubscriber: function (currentUser) {
                        return currentUser ? _.contains(subscriberRoles, currentUser.role) : false;
                    },

                    isRolePublisher: function (currentUser) {
                        return currentUser ? _.contains(publisherRoles, currentUser.role) : false;
                    },

                    isRoleOperator: function (currentUser) {
                        return currentUser ? _.contains(operatorRoles, currentUser.role) : false;
                    }
                };
            }
        );
    }
);