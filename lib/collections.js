Categories = new Mongo.Collection('Categories');

Games = new Mongo.Collection('Games');

GamesImages = new FS.Collection('GamesImages', {
  stores: [new FS.Store.GridFS('GamesImages')]
})
