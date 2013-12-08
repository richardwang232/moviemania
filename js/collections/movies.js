define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	var Movies = new Backbone.Collection([
        {title: "Elysium", imgURL: "http://fc01.deviantart.net/fs70/f/2012/189/6/e/elysium_movie_poster_by_dcomp-d56j3bj.jpg"},
        {title: "World War Z", imgURL: "http://latimesherocomplex.files.wordpress.com/2013/03/world-war-z.jpg"},
        {title: "Pacific Rim", imgURL: "http://www.impawards.com/2013/posters/pacific_rim_ver3.jpg"},
        {title: "Monsters University", imgURL: "http://images.fandango.com/images/fandangoblog/MUNTeaserposter900.jpg"},
        {title: "White House Down", imgURL: "http://www.impawards.com/2013/posters/white_house_down_ver4.jpg"},
        {title: "Despicable Me 2", imgURL: "http://www.upcoming-movies.com/image/despicable-me-two-movie-poster.jpg"},
        {title: "The Lone Ranger", imgURL: "http://www.impawards.com/2013/posters/lone_ranger.jpg"},
        {title: "Grown Ups 2", imgURL: "http://4.bp.blogspot.com/-iQZczN2Lb-4/UUJalia7QoI/AAAAAAAAACA/PN1K-dPekVo/s400/grown_ups_2_new-poster.jpg"},
        {title: "Fruitvale Station", imgURL: "http://www.impawards.com/2013/posters/fruitvale_station_xlg.jpg"}
      ]);	
	return Movies;
});
