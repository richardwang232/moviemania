define([
	'jquery',
	'underscore',
	'backbone',
	'models/tweet'
], function($, _, Backbone) {
	var Tweets = Backbone.Collection.extend({
		tmdb_base_url: "",
		url: "",
		initialize: function() {

		},
		sync: function(method, model, options) {
			var that = this;
			if (method === 'read') {
				var title = options.title;
				//** this is back-end API call code...should put in sync
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
				this.cb.__call(
				"search_tweets",
				"q="+encodeURIComponent(title)+"&lang=en",
				function (response) {
				    var tweetObjs = response.statuses;
				    console.log(tweetObjs);
				    var tweets = [];
				    for (var i = 0; i < tweetObjs.length; i++)
				    {
				      tweets.push({"content": tweetObjs[i].text});
				    }
				    //** set collection models to the new array of tweets
				    that.reset(tweets);
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
	return new Tweets();
});
