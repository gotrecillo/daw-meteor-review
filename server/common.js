import { Meteor } from 'meteor/meteor';
import { Games, Categories } from '../lib/collections';

Meteor.publish('games', () => Games.find());
Meteor.publish('categories', () => Categories.find());
