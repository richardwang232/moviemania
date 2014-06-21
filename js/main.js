require.config({
    baseUrl: 'js',
    paths: {
        jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
        underscore: "lib/underscore-amd",
        backbone: "lib/backbone-amd",
        localstorage: "lib/backbone.localStorage",
        mustache: "http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min",
        sha1: "lib/sha1",
        codebird: "lib/codebird",
        less: "http://cdnjs.cloudflare.com/ajax/libs/less.js/1.5.0/less.min",
        bootstrap: "http://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min",
        text: "lib/text",
        async: "lib/async"
    },
    shim: {
      bootstrap: ['jquery']
    }
});

require([
  'jquery', 
  'underscore', 
  'backbone',
  'models/movie',
  'models/tmdb_config',
  'collections/movies',
  'collections/saved_movies',
  'views/movie-grid',
  'views/movies_list',
  'views/tweets_list',
  'views/saved_movies',
  'text!../templates/saved_movies_list.html',
  'mustache',
  'localstorage',
  'less',
  'bootstrap',
  'sha1',
  'codebird'
], 
function($, _, Backbone, MovieModel, TMDBConfig, MoviesCollection, SavedMoviesCollection, MovieGridView, MoviesView, TweetsView, SavedMoviesView, SavedMoviesTemplate, Mustache) {

  $.when(TMDBConfig.fetch()).then(function() {
    var savedMovies = new SavedMoviesCollection();
    var movies = new MoviesCollection();

    var moviesView = new MovieGridView({collection: movies});

//    var savedMoviesView = new SavedMoviesView({collection: savedMovies});
//    var moviesView = new MoviesView({collection: movies}); 
//    var tweetsView = new TweetsView();  
/*
    savedMovies.fetch({
      success: function() {
        var savedMoviesView = new SavedMoviesView({collection: savedMovies});
        var moviesView = new MoviesView({collection: movies}); 
        var tweetsView = new TweetsView();       
      }
    });
*/
 
  });
/*  tmdbConfig.then();
  var movieList = new MovieList();  */
//google.maps.event.addDomListener(window, 'load', initialize);  
  /*




var tweetList = new TweetList();



var router = new Router();
router.on('route:home', function() {
    movieList.render();
});
router.on('route:tweets', function(title) {
  $('.tweets').remove();
    tweetList.render(title);
});

Backbone.history.start();
*/
});
