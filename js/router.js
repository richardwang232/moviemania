var Router = Backbone.Router.extend({
  routes: {
  '': 'home',
  'tweets/:title': 'tweets',

  }
});