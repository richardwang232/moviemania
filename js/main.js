require.config({
    baseUrl: 'js',
    paths: {
        jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
        underscore: "lib/underscore-amd",
        backbone: "lib/backbone-amd",
        mustache: "http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min",
//        sha1: "sha1",
//        codebird: "codebird",
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
  'collections/movies',
  'views/movies_list',
  'async!http://maps.google.com/maps/api/js?sensor=false',
  'less',
  'bootstrap'
], 
function($, _, Backbone, MovieModel, MoviesCollection, MovieList) {
  var movieList = new MovieList();
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
