define(['jquery', 'underscore', 'backbone', 'handlebars'],
    function ($, _, Backbone, Handlebars) { 
        'use strict';

        var MovieListView = Backbone.View.extend({
                tagName: 'li',

                className: 'item-view',

                events: {
                    'click .add-movie': 'makeFavorite'
                },

                template: Handlebars.compile( $("#item-view").html() ),

                render: function(){
                    this.$el.html(this.template(this.model.toJSON()));

                    return this;
                },

                makeFavorite: function(){
                    this.model.set({favorite: true});
                }
            });

        return MovieListView;
});