require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        jquery: 'jQuery',
        underscore: 'underscore',
        backbone: 'Backbone',
        'backbone.localStorage': 'backbone.localStorage',
        handlebars: 'handlebars',
        'jquery-ui': 'jquery-ui'
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