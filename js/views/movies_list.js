define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/movie',
  'models/tmdb_config',
  'text!../../templates/movies_list.html'
], 
function($, _, Backbone, Mustache, MovieModel, TMDBConfig, MoviesListTemplate) {
  var MovieList = Backbone.View.extend({
    el: "#movies-container",
    events: {
      "click img": "highlightMovie",

    },

    initialize: function(options) {
      var that = this;
      this.savedMovies = options.savedMovies;
      this.collection.fetch({
        success: _.bind(that.render, this)
      });
    },

    render: function() {
      var movies = this.collection.toJSON();
      var that = this;
      //** creates the template based on our movies collection and uses base_url and poster_size to as config 
      //** parameters
      var template = Mustache.render(MoviesListTemplate, {
        movies : movies,
        base_url : TMDBConfig.get("images").base_url, //** from TMDB /config API call
        poster_size : TMDBConfig.get("images").poster_sizes[5]
      });
      that.$el.html(template);

      //** some code found on the Internet to fix issues with Bootstrap carousel
      $('#myCarousel').carousel({
        interval: false
      })

      $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
          next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
      });

      $('.carousel .item').eq(0).addClass("active");
      //** end of that code 
    },

    highlightMovie: function(event)
    {
      var $poster = $(event.target).parents("div.poster"),
          movieId = $poster.data("movie-id"),
          $prevSelectedPoster = $("div.poster.selected"),
          movie = this.collection.get(movieId);
      this.saveMovie(movie);
      if ($prevSelectedPoster) {
        $prevSelectedPoster.removeClass("selected");
      }
      $("ul img").each(function(index, element) {
        $(element).css('border', '3px solid black');
      });
      $("[data-movie-id="+movieId+"]").addClass("selected");
      //** trigger event that tweets_list subscribes to and updates accordingly 
      Backbone.Events.trigger("me:renderTweetList", $poster.data("movie-title"));
    },

    saveMovie: function(movie) {
      var m = new MovieModel();
      m.set("title", movie.get('title'));
      this.savedMovies.add(m);
      m.save();
    },
    search: function(event) {
      console.log("hi");
    }
  });
  return MovieList;
})
