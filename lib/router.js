import { Games, Categories } from './collections';
import { Router } from 'meteor/iron:router';

Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home',
    data: () => ({ games: Games.find({ is_featured: 1 }) }),
  });

  this.route('games', {
    path: '/games',
    template: 'games',
    data: () => ({ games: Games.find() }),
  });

  this.route('addGame', {
    path: '/addGame',
    template: 'addGame',
    data: () => ({ categories: Categories.find() }),
  });
});
