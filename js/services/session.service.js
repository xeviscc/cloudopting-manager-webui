define(['app'],
    function(app) {
        app.factory('SessionService',
            function () {
                'use strict';

                return {
                    currentUser: null
                };
            }
        );
    }
);