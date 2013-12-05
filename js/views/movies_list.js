      var MovieList = Backbone.View.extend({
        el: ".movies",
        events: {
          "click .addMovieBtn": "addMovie",
          "click img": "highlightMovie",

        },
        initialize: function() {
          this.collection = new Movies(movieData);
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
          var template = _.template($('#movie_template').html(), {movies:movieData});
          this.$el.html(template);
          for (var i = 0; i<movieData.length; i++)
          {
            _.each(movieData, function (item) {
                this.loadImage(item.title, item.imgURL);
            }, this);
            
          }
          

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