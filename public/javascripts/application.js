var App = {
  templates: JST,
  $el: $('main'),
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    });
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart,
    });
  },
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },
  newAlbum: function() {
    new NewAlbumView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'add_album', this.newAlbum);
    this.on('add_to_cart', this.cart.addItem.bind(this.cart));
  }
};

Handlebars.registerHelper('formatPrice', function(price) {
  return Number(price).toFixed(2);
});