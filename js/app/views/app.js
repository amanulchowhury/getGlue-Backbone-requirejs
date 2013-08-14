define(['jquery', 'underscore', 'backbone', 'handlebars', 
	'app/collections/favorite', 'app/collections/movie',
	 'app/views/favoriteList', 'app/models/movie', 
	 'app/views/movieList'], 
	function($, _, Backbone, Handlebars, FavoriteCollection, MovieCollection, FavListView, Movie, MovieListView){
		'use strict';
		
	    var AppView = Backbone.View.extend({
				el: '#app',

				events: {
		            'submit #searchform': 'getMovies'
		        },

				initialize: function(){
					console.log('appView initialized');
					this.$input = $('#query');

					new FavListView({
						collection: FavoriteCollection
					});

					this.listenTo(MovieCollection, 'reset', this.addAllToSearch);
					this.listenTo(MovieCollection, 'change:favorite', this.addOneToFavorite);
					
					FavoriteCollection.fetch({ reset:true });
				},

				addOneToFavorite: function(movie) {
			        var newMovie = new Movie(movie.toJSON());
		            newMovie.set({ ordinal: FavoriteCollection.nextOrdinal(), favorite: true });

		            FavoriteCollection.create(newMovie);
			    },

		        addOneToSearch: function (movie) {
					var view = new MovieListView({ model: movie });
					$('#searchlist').prepend(view.render().el);
				},

				addAllToSearch: function () {
					this.$('#searchlist').html('');
					MovieCollection.each(this.addOneToSearch, this);
				},

				newSearch: function(){
					return $.param({
		                q: this.$input.val().trim()
		            });
				},

				getMovies: function(e){
					e.preventDefault();
		            MovieCollection.each(function(model) { model.destroy(); } )
		            MovieCollection.fetch({ data: this.newSearch(), reset:true});
				}
			});

		return AppView;

});