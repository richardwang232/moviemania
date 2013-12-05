      var TweetList = Backbone.View.extend({
        el: ".tweets-container",
        
        initialize: function() {
          this.template = _.template($('#tweet_template').html());

        },
        
        render: function(title) {
          var me = this;
          var title = decodeURIComponent(title);
          var tweets = this.getTweets(title, function(title, tweets) {
            var template = me.template({title: title, tweets: tweets});
            me.$el.hide().html(template).fadeIn(800);              
          });
            
        },
        getTweets: function(title, fn) {
/*
      var cb = new Codebird;
      cb.setConsumerKey("dJubmPzGfaSiM4z6enh5Pw", "QdulpG2gTkfftg2yaGxYYgbqTwF3BoARsqizRi54rc");
      cb.__call(
        "oauth2_token",
        {},
        function (reply) {
            var bearer_token = reply.access_token;
            console.log(bearer_token);
        }
      );
    
    cb.__call(
    "search_tweets",
    "q="+encodeURIComponent(title)+"&lang=en",
    function (response) {
        console.log(response);
        var tweetObjs = response.statuses;
        console.log(tweetObjs);
        var tweets = [];
        for (var i = 0; i < tweetObjs.length; i++)
        {
          tweets.push({"content": tweetObjs[i].text});
        }
        console.log(tweets);
        fn(title,tweets);
    },
    true // this parameter required
    );
*/
         fn(title,movieTweets[title]);

        }
      });