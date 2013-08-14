define(['underscore', 'backbone', 'backbone.localStorage', 'app/models/favorite'],
    function(_, Backbone, Store, Favorite){
        'use strict';

    	var FavoriteCollection = Backbone.Collection.extend({
                model: Favorite,

                localStorage: new Store('movies-favorite'),
                
                nextOrdinal: function () {
        			if (!this.length) {
        				return 0;
        			}
        			return this.last().get('ordinal') + 1;
        		},

                comparator: function(movie){
                    return movie.get('ordinal');
                }
            });

        return new FavoriteCollection();
});