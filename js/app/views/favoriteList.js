define(['jquery', 'underscore', 'backbone', 'handlebars', 'app/views/favorite', 'jquery-ui'],
	function($, _, Backbone, Handlebars, FavoriteView, ui){
		'use strict';

	    var FavListView = Backbone.View.extend({
				el: '#favlist',

				events: {
					'update-sort': 'updateSort'
				},

				initialize: function(){
					this.listenTo(this.collection, 'add', this.addOne);
					this.listenTo(this.collection, 'reset', this.addAll);

					this.$el.sortable({
				        stop: function(event, ui) {
				            ui.item.trigger('drop', ui.item.index());
				        },
				        helper: 'clone',
				        tolerance: 'pointer',
				        opacity: '0.6',
				        refreshPositions: true,
				        scroll: true,
				        cursor: 'move',
				        delay: 150,
				        forceHelperSize: true,
				        items: '> li',
				        zIndex: 9999
				        //,
				        //handle: ".item-view > div"
		    		}).disableSelection();;
				},

				addAll: function(){
					this.$el.children().remove();
					this.collection.sort().each(this.addOne, this);
					return this;
				},

				addOne: function(model){
					var element = new FavoriteView({model: model}).render().el;
					this.$el.prepend(element);
				},

				updateSort: function(event, model, position){
					var actualPosition = this.collection.length - (position + 1);
					this.collection.remove(model);
			        this.collection.each(function (item, index) {
			            var ordinal = index;
			            if (index >= actualPosition)
			                ordinal += 1;
			            item.save({ 'ordinal': ordinal });
			        });            
			        
			        model.set('ordinal', actualPosition);
			        this.collection.create(model, {silent: true});

			        this.addAll();
				}
			});
		return FavListView;
});
