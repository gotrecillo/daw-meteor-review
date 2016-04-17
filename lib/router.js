import { Games, Categories } from './collections';
import { Router } from 'meteor/iron:router';

Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home',
    data: () => ({ games: Games.find({ isFeatured: '1' }) }),
  });

  this.route('games', {
    path: '/games',
    template: 'games',
    data: () => ({ games: Games.find() }),
  });

  this.route('categories', {
    path: '/categories/:slug',
    template: 'games',
    data() {
      const templateData = {
        games: Games.find({ category: this.params.slug }),
      };
      return templateData;
    },
  });

  this.route('addGame', {
    path: '/addGame',
    template: 'addGame',
    data: () => ({ categories: Categories.find() }),
  });

  this.route('newReview', {
    path: '/newReview/:_id',
    template: 'newReview',
    data() {
      return Games.findOne(this.params._id);
    },
  });

  this.route('game', {
    path: '/games/:_id',
    template: 'game',
    data() {
      return Games.findOne(this.params._id);
    },
  });
});
