define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie'
], function($, _, Backbone) {
	var Movies = Backbone.Collection.extend({
		tmdb_base_url: "",
		url: "https://api.themoviedb.org/3/movie/now_playing?api_key=00b1a245c429c285c83f95fbb86180be",
		initialize: function() {

		},
		parse: function(response) {
			return response.results;
		}
      });	
	return Movies;
});
