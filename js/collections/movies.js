define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie',
	'backbone.paginator',
], function($, _, Backbone, MovieModel) {
	var Movies = Backbone.PageableCollection.extend({
		mode: 'client',
		model: MovieModel,
		url: "https://api.themoviedb.org/3/movie/now_playing?api_key=00b1a245c429c285c83f95fbb86180be",
		tmdb_base_url: "",
		state: {
			pageSize: 8
		},
		initialize: function() {

		},
		parse: function(response) {
			return response.results;
		}
     });
	return Movies;
});
