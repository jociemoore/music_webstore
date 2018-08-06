var path = require('path');
var _ = require('underscore');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums'));

module.exports = function(router) {
  router.route('/albums').get(function(req, res, next) {
    res.json(Albums.get());
  }).post(function(req, res) {
    var album = req.body;
    var albums = Albums.get();
    
    album.id = Albums.getLastID() + 1;
    albums.push(album);
    Albums.set(albums);
    res.json(album);
  }).put(function(req, res, next) {
    var albums = Albums.get();
    var currentAlbum = _(albums).findWhere({ id: +req.body.id });

    _extend(currentAlbum, req.body);
    Albums.set(albums);
    res.json(currentAlbum);
  }).delete(function(req, res, next) {
    var albums = _(Albums.get()).reject(function(a) {
      return a.id === +req.body.id;
    });
    Albums.set(albums);
    res.stat(200).end();
  });

  router.get('/albums/new', function(req, res) {
    res.render('new', { albums: Albums.get() });
  });
};
