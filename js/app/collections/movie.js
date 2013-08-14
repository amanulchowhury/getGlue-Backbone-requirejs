define(['underscore', 'backbone', 'backbone.localStorage', 'app/models/movie'],
	function(_, Backbone, Store, Movie){
		'use strict';
		var MovieCollection = Backbone.Collection.extend({
	        
		        model: Movie,

		        url: 'http://search.guide.getglue.com/objects',
		         
		        parse: function(response){
		            
		            return response;
		        }
		    });

	    return new MovieCollection();
});