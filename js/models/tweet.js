define([
	'jquery',
	'underscore',
	'backbone'
], 
function($, _, Backbone) {
	var Tweet= Backbone.Model.extend({
	    defaults: {
	    	test: true
	    },
	    initialize: function() {
	    }
	 });
	 return Tweet;	
})
