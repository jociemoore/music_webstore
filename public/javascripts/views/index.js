var IndexView = Backbone.View.extend({
  attributes: {
    id: 'index'
  },
  events: {
    'click footer a': 'addAlbum'
  },
  addAlbum: function(e) {
    e.preventDefault();
    this.trigger('add_album');
  },
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});