require.config({

    baseUrl: 'js',

    paths: {
        app: 'app',
        jquery: 'lib/jQuery',
        underscore: 'lib/underscore',
        backbone: 'lib/Backbone',
        'backbone.localStorage': 'lib/backbone.localStorage',
        handlebars: 'lib/handlebars',
        'jquery-ui': 'lib/jquery-ui'
    },

    shim: {

        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        'jquery-ui':  ['jquery' ]
    }
});

define(['app/views/app'], function(AppView) {
    return new AppView();
});