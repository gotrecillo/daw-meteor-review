import { Mongo } from 'meteor/mongo';
import { FS } from 'meteor/cfs:base-package';

export const Categories = new Mongo.Collection('Categories');

export const Games = new Mongo.Collection('Games');

export const GamesImages = new FS.Collection('GamesImages', {
  stores: [new FS.Store.GridFS('GamesImages')],
});

GamesImages.allow({
  insert: () => true,
  update: () => true,
  download: () => true,
});
