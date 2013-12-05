require.config({
    baseUrl: 'js',
    paths: {
        jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
        underscore: "lib/underscore-amd",
        backbone: "lib/backbone-amd",
//        sha1: "sha1",
//        codebird: "codebird",
        less: "http://cdnjs.cloudflare.com/ajax/libs/less.js/1.5.0/less.min"
    }
});

require([
  'jquery', 
  'underscore', 
  'backbone',
  'models/movie',
  'collections/movies'
], function($, _, Backbone, MovieModel, MoviesCollection) {
  /*
var movieList = new MovieList();



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
