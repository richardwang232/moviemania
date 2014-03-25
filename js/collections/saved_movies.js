define(
[
	"models/movie",
	"localstorage"
], function(MovieModel) {
    var SavedMovies = Backbone.Collection.extend({
    	model: MovieModel,
        localStorage: new Backbone.LocalStorage("saved-movies") // Unique name within your app.
    });

    return SavedMovies;
});