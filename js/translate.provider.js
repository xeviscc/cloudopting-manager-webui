define(
    [
        'app',
    ],
    function(app) {
        app.config(
            function ($translateProvider) {
                'use strict';

                $translateProvider.useStaticFilesLoader({
                    prefix: 'i18n/',
                    suffix: '.json'
                });

                $translateProvider.preferredLanguage('en_US');
                $translateProvider.useSanitizeValueStrategy('escaped');
            }
        )
    }
);