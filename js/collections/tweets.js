define([
	'jquery',
	'underscore',
	'backbone',
	'models/tweet'
], function($, _, Backbone, TweetModel) {
	var Tweets = Backbone.Collection.extend({
		initialize: function() {
			//this only needs to be done once, get bearer token for OAuth Twitter
			this.cb = new Codebird;
			this.cb.setConsumerKey("dJubmPzGfaSiM4z6enh5Pw", "QdulpG2gTkfftg2yaGxYYgbqTwF3BoARsqizRi54rc");
			this.cb.__call(
			    "oauth2_token",
			    {},
			    function (reply) {
			        var bearer_token = reply.access_token;
			        console.log(bearer_token);
			    }
			);
		},
		sync: function(method, model, options) {
			var that = this;
			if (method === 'read') {
				var title = options.title;
				
				//** this is back-end API call code...should put in sync
				this.cb.__call(
				"search_tweets",
				"q="+encodeURIComponent(title)+"&lang=en",
				function (response) {
				    var tweetObjs = response.statuses;
				    console.log(tweetObjs);
				    //** tweets will be an array of Tweet model objects
				    var tweets = [];
				    for (var i = 0; i < tweetObjs.length; i++)
				    {
				    	var tweetModel = new TweetModel({
				    		content: tweetObjs[i].text
				    	});
				    	tweets.push(tweetModel);
				    }
				    //** set collection models to the new array of tweets
				    that.reset(tweets);
//				    return true;
				},
				true // this parameter required
				);
			}
			else {
				Backbone.sync.apply(this, arguments);
			}
		},
		searchTweets: function(title, fn) {
		}
    });	
	return Tweets;
});
