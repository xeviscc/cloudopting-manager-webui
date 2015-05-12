// Karma configuration
module.exports = function(config){
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'app/controllers/*.js',
            'test/controllers/*.js'
        ],

        //    .concat(
        //      files.jquery,
        //      files.angular,
        //      files.angular_mocks,
        //      files.testUtil,
        //      files.test),
        // list of files / patterns to exclude
        exclude: [],

        // web server port
        // CLI --port 8080
        port: 8080,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'Firefox',
            'Chrome'
        ],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 20000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        // Which plugins to enable
        plugins: [
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });

};