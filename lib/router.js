import { Games, Categories } from './collections';
const Router = 1;
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

  this.route('add_game', {
    path: '/add_game',
    template: 'add_game',
    data: () => ({ categories: Categories.find() }),
  });
});
