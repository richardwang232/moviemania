define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/movie',
  'models/tmdb_config',
  'text!../../templates/movie-grid.html'
], 
function($, _, Backbone, Mustache, MovieModel, TMDBConfig, MovieGridTemplate) {
  var MovieGrid = Backbone.View.extend({
  	el: '#movies-container',
  	events: {

  	},
  	initialize: function() {
  		var that = this;
		this.collection.fetch({
			success: _.bind(that.render, this)
		});
  	},
  	render: function() {
  		var context = {
  			movies: this.collection.toJSON(),
	        base_url : TMDBConfig.get("images").base_url, //** from TMDB /config API call
	        poster_size : TMDBConfig.get("images").poster_sizes[5]
  		};
  		this.$el.html(Mustache.render(MovieGridTemplate, context));
  	}
  });
  return MovieGrid;
});