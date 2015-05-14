define(['app'],
    function(app) {
        app.factory('RestApi',
            function ($http) {
                'use strict';

                var restBaseURI = "http://cloudopting1.cloudapp.net:8081/cloudopting/api";
                //Internal resource
                //var restBaseURI = "http://172.17.0.59:8080/cloudopting/api/";

                var LOGIN_METHOD = "login";
                var REGISTER_METHOD = "register";
                var ROLES_METHOD = "roles";
                var USERS_METHOD = "users/%s";
                var APPLICATION_METHOD = "application/%s";
                var CUSTOMIZATION_METHOD = "customization/%s";
                var APPLICATION_CREATE_METHOD = "application/create";
                var APPLICATION_CUSTOMIZATION_METHOD = "customization/create";
                /**
                 * APPLICATION_LIST_METHOD prepared method needs 5 parameters to work.
                 *
                 * @param page
                 * @param size
                 * @param sortBy
                 * @param sortOrder
                 * @param filter
                 */
                var APPLICATION_LIST_METHOD = "application/list?page=%s&size=%s&sortBy=%s&sortOrder=%s&filter=%s";
                var APPLICATION_LIST_UNPAGINATED_METHOD = "application/listunpaginated";

                var restAPI = {};

                /**
                 * Method to do the login to the rest-component.
                 * @returns {*}
                 */
                restAPI.login = function (user) {
                    //FIXME: Fake user validation.
                    if(user.name == 'admin' && user.password == 'admin') {
                        user.role = 'admin';
                        return user;
                    }
                    return false;
                    /*
                    return $http.post({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD,
                        msg: user
                    });
                    */
                };

                /**
                 * Method to do the registration to the rest-component.
                 * @returns {*}
                 */
                restAPI.register = function (user) {
                    //FIXME: Fake response.
                    return false;
                    /*
                    return $http.post({
                        method: 'JSONP',
                        url: restBaseURI + REGISTER_METHOD,
                        msg: user
                    });
                    */
                };

                /**
                 * Method to get the roles from the rest-component.
                 * @returns {*[]}
                 */
                restAPI.roles = function () {
                    //FIXME: Fake role list.
                    var roleList = [
                        {
                            Role: {
                                name: 'admin'
                            }
                        },
                        {
                            Role: {
                                name: 'subscriber'
                            }
                        },
                        {
                            Role: {
                                name: 'publisher'
                            }
                        },
                        {
                            Role: {
                                name: 'operator'
                            }
                        }
                    ];

                    return roleList;
                    /*
                     return $http.get({
                     method: 'JSONP',
                     url: restBaseURI + ROLES_METHOD
                     });
                     */
                };
                /**
                 * Method to create a new application.
                 * @returns {*}
                 */
                restAPI.applicationCreate = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * Method to create a customization.
                 * @returns {*}
                 */
                restAPI.customizationCreate = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * Method to get the application list applaying filters, and with pagination
                 * @returns {*}
                 */
                restAPI.applicationList = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * Method to get the application list without pagination
                 * @returns {*}
                 */
                restAPI.applicationListUnpaginated = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * Method to get an application with an ID.
                 * @returns {*}
                 */
                restAPI.application = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * Method to get a customization with an ID.
                 * @returns {*}
                 */
                restAPI.customization = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * TODO: Check if this function will be useful in the future.
                 * Method to get the users
                 * @returns {*}
                 */
                restAPI.users = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                /**
                 * Method to send a CSAR file to the rest-component.
                 * @returns {*}
                 */
                restAPI.sendFile = function () {
                    return $http({
                        method: 'JSONP',
                        url: restBaseURI + LOGIN_METHOD
                    });
                };

                return restAPI;
            }
        )
    }
);