define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/movie',
  'collections/movies',
  'text!../../templates/movies_list.html'
], 
function($, _, Backbone, Mustache, Movie, MoviesCollection, MoviesListTemplate) {
  var MovieList = Backbone.View.extend({
  el: "#movies-container",
  events: {
    "click .addMovieBtn": "addMovie",
    "click img": "highlightMovie",

  },
  initialize: function() {
    this.collection = MoviesCollection;
    this.render();
  },
  
  addMovie: function() {
  /*          var movie = new Movie();
    movie.title = $("#movieVal").val();
    this.collection.add(movie);
    this.render();
  */
  },

  render: function() {
    var movieData = this.collection.toJSON();
    var template = Mustache.render(MoviesListTemplate, movieData);
    this.$el.html(template);

    $('#myCarousel').carousel({
      interval: false
    })

    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });

    $('.carousel .item').eq(0).addClass("active");
  },

  search: function(event) {
    alert("hi");
    console.log("hi");
  },

  loadImage: function(movie, imgURL) {
    if (imgURL == "")
    {
      var movieQueryTerm = movie.split(" ").join("+");
              $.getJSON(
                "https://www.googleapis.com/customsearch/v1?key=AIzaSyAFeatRyqgpVPELTJJx5NqUhPvbNtHw7cA&cx=016431179489150875368:gflbuhxjoto&q="+movieQueryTerm+"+movie+poster&searchType=image&alt=json",
                function(result) {
                    console.log(result.items[0].link);
                    var movieId = movie.split(" ").join("-");
                    console.log(movieId);
                    $("#"+movieId).attr("src", result.items[0].link);
                });
    }         
    else
    {
      var movieId = movie.split(" ").join("-");
      $("#"+movieId).attr("src", imgURL);
    }
  },

  highlightMovie: function(event)
  {
    $("ul img").each(function(index, element) {
      $(element).css('border', '3px solid black');
    });
    $(event.srcElement).css('border', "3px solid blue"); 
  //          console.log(event);
  }

  });

return MovieList;
})
