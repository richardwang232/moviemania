define([
	'jquery',
	'underscore',
	'backbone',
	'models/tweet'
], function($, _, Backbone, TweetModel) {
	var Tweets = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("tweets"),
		model: TweetModel,
		initialize: function() {
			//this only needs to be done once, get bearer token for OAuth Twitter
			this.cb = new Codebird;
			this.cb.setConsumerKey("dJubmPzGfaSiM4z6enh5Pw", "QdulpG2gTkfftg2yaGxYYgbqTwF3BoARsqizRi54rc");
			this.cb.__call(
			    "oauth2_token",
			    {},
			    function (reply) {
			        var bearer_token = reply.access_token;
			    }
			);
		},
		sync: function(method, model, options) {
			var that = this;

			if (method === 'read') {
				var title = this.title;
				return this._getNewTweets(title);

			}
			else {
				Backbone.sync.apply(this, arguments);				
			}
		}, 
		_getNewTweets: function(title) {
			var that = this;
			//use jQuery deferreds to override sync behavior for Twitter OAuth REST call
			this.promise = $.Deferred();
			// this is back-end API call code
			this.cb.__call(
			"search_tweets",
			"q="+encodeURIComponent(title)+"&lang=en",
			function (response) {
				//some jquery promise action
				that.reset(that.parse(response));
				that.promise.resolve();
			},
			true // this parameter required
			);
			return this.promise.promise();
		},
		parse: function(response) {
			return response.statuses;
		}
    });	
	return Tweets;
});
