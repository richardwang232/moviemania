define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/movie',
  'models/tmdb_config',
  'text!../../templates/saved_movies_list.html'
], 
function($, _, Backbone, Mustache, MovieModel, TMDBConfig, SavedMoviesTemplate) {
  var SavedMoviesView = Backbone.View.extend({
  	el: "#saved-movies",
  	events: {
  		"click .delete-movie": "deleteMovie"
  	},
  	initialize: function() {
  		Backbone.Events.on("me:saveMovie", _.bind(this.addMovie, this));
  		Backbone.Events.listenTo(this.collection, 'remove', _.bind(this.render, this));
      this.collection.fetch({
        success: _.bind(this.render, this)
      });
  	},
  	render: function() {
        var template = Mustache.render(SavedMoviesTemplate, {
          movies : this.collection.toJSON(),
          base_url : TMDBConfig.get("images").base_url, //** from TMDB /config API call
          poster_size : TMDBConfig.get("images").poster_sizes[5]
        });
        this.$el.html(template);
        this.delegateEvents();
  	},
  	addMovie: function(movie) {
  		var that = this;
		var m = new MovieModel();
		m.set("title", movie.get('title'));
		this.collection.add(m);
		m.save(null, {
			success: _.bind(that.render, that),
			error: function() {
			}
		});
    },
  	deleteMovie: function(event) {
  		event.preventDefault();
  		var that = this;
  		var movie_id = $(event.target).data('id');
  		var saved_movie = this.collection.get(movie_id);
//  		that.collection.remove(movie_id);
//  		saved_movie.destroy().then(_.bind(that.render, that)).fail(alert("Unable to delete movie"));
		saved_movie.destroy({
//			success: _.bind(that.render, that),
			error: function(model, response) {
				alert("unable");
			}
		});
  	}
  });

  return SavedMoviesView;
});