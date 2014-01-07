require.config({
    baseUrl: 'js',
    paths: {
        jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
        underscore: "lib/underscore-amd",
        backbone: "lib/backbone-amd",
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
  'views/movies_list',
  'views/tweets_list',
  'async!http://maps.google.com/maps/api/js?sensor=false',
  'less',
  'bootstrap',
  'sha1',
  'codebird'
], 
function($, _, Backbone, MovieModel, TMDBConfig, MoviesCollection, MovieList, TweetsList) {

  $.when(TMDBConfig.fetch()).then(function() {
    var movieList = new MovieList(); 
    var tweetsList = new TweetsList();  
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
