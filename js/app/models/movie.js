define(['underscore', 'backbone'],
	function(_, Backbone) {
		'use strict';

		var Movie = Backbone.Model.extend({
				defaults: {
					favorite: false
				}
			});

		return Movie;
});