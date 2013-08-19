require.config({

    baseUrl: 'js',

    paths: {
        app: 'app',
        jquery: 'lib/jquery/jquery.min',
        underscore: 'lib/underscore/underscore-min',
        backbone: 'lib/backbone/backbone-min',
        'backbone.localStorage': 'lib/backbone.localStorage/backbone.localStorage-min',
        handlebars: 'lib/handlebars/handlebars',
        'jquery-ui': 'lib/jquery-ui/ui/minified/jquery-ui.min'
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