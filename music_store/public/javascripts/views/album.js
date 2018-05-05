var AlbumView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.album,
  events: {
    'click a.button': 'addToCart',
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  render: function() {
    var id = this.model.get('id');

    this.$el.attr('id', 'album_' + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul'));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});