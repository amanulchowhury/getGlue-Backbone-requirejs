require.config({

    baseUrl: 'js',

    paths: {
        app: 'app',
        jquery: 'lib/jquery/jquery',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        'backbone.localStorage': 'lib/backbone.localStorage/backbone.localStorage',
        handlebars: 'lib/handlebars/handlebars',
        'jquery-ui': 'lib/jquery-ui/ui/jquery-ui'
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