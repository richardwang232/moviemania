define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/tmdb_config',
  'collections/tweets',
  'text!../../templates/tweets_list.html'
], 
function($, _, Backbone, Mustache, TMDBConfig, TweetsCollection, TweetsListTemplate) {
  var TweetList = Backbone.View.extend({
    el: "#tweets-container",
    events: {
    },
    initialize: function() {
      Backbone.Events.on("me:renderTweetList", _.bind(this.render, this));
      this.collection = new TweetsCollection();
      //** listen for reloading ('reset' event) of the tweets collection
      this.listenTo(this.collection, "reset", _.bind(this.renderTweetList, this));
    },
    
    render: function() {
      var that = this;
      this.collection.fetch({
        title: $(".selected").data("movie-title"),
      });
/*
      var title = decodeURIComponent(title);
      var tweets = this.getTweets(title, function(title, tweets) {
        var template = me.template({title: title, tweets: tweets});
        me.$el.hide().html(template).fadeIn(800);              
      });
*/        
    },
    //** called every time we want to get the tweets from a movie
    renderTweetList : function(tweets) {
      var tweets = this.collection.toJSON();
      var template = Mustache.render(TweetsListTemplate, {tweets:tweets});
      this.$el.html(template);
    }
/*
    getTweets: function(title, fn) {

     fn(title,movieTweets[title]);

    }
*/
  });
  return TweetList;
});