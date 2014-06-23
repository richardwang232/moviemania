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
  		'click .next-page': 'next',
  		'click .prev-page': 'prev',
  		'click .page': 'goToPage'
  	},
  	initialize: function() {
  		var that = this;
		this.collection.fetch({
			success: _.bind(that.render, this)
		});
  	},
  	render: function() {
  		var that = this;
		var pages = [];
		for (var i=this.collection.state.firstPage; i <= this.collection.state.lastPage; i++) {
			pages.push({
				page_number: i
			})
		}
  		var context = {
  			movies: this.collection.toJSON(),
	        base_url : TMDBConfig.get("images").base_url, //** from TMDB /config API call
	        poster_size : TMDBConfig.get("images").poster_sizes[5],
			hasPreviousPage: (this.collection.state.currentPage > this.collection.state.firstPage),
			hasNextPage: (this.collection.state.currentPage < this.collection.state.lastPage),
			pages: pages,
			isCurrentPage: function() {
				return function(val, render) {
					var page_number = parseInt(render(val),10);
					if (page_number === that.collection.state.currentPage) {
						return "<b>" + render(val) + "</b>";
					}
					else {
						return render(val);
					}
				}
			}
  		};
  		this.$el.html(Mustache.render(MovieGridTemplate, context));
  		this.delegateEvents();
  	},
  	next: function() {
  		this.collection.getNextPage();
  		this.render();
  	},
  	prev: function() {
  		this.collection.getPreviousPage();
  		this.render();
  	},
	goToPage: function(event) {
		event.preventDefault();
		var page_number = $(event.target).data('page');
		this.collection.getPage(page_number);
		this.render();
	}
  });
  return MovieGrid;
});