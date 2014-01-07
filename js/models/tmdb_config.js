define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	var tmdb_config = Backbone.Model.extend({
		base_url : "",
		url : "https://api.themoviedb.org/3/configuration?api_key=00b1a245c429c285c83f95fbb86180be",
		initialize: function() {

		},
	});

	//** instantiating on return, before i instantiated in main.js and this caused issues with scope
	return new tmdb_config();

});

