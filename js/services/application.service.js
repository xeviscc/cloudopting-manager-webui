define(['app'],
    function(app) {
        app.factory('ApplicationService',
            function () {
                'use strict';

                return {
                    currentApplication: null
                };
            }
        );
    }
);