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
      var that = this;
      Backbone.Events.on("me:renderTweetList", _.bind(this.renderTweetList, this));
      this.collection = new TweetsCollection();
    },
    
    render: function() {
      var that = this;
      var template = Mustache.render(TweetsListTemplate, {
        tweets: this.collection.toJSON(),
        movie_title: this.collection.title
      });
      this.$el.html(template);
    },

    // called every time we want to get the tweets from a movie
    renderTweetList : function(title) {
      this.collection.title = title;
      this.$el.find('.ajax-loader').show();
      this.$el.find('.tweets').hide();
      this.collection.fetch().done(_.bind(this.render, this));
    }
  });
  
  return TweetList;
});