import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Games } from './collections';

Meteor.methods({

  addGame: game => {
    Games.insert(game);
  },

  addReview: (id, rating, review) => {
    check(id, String);
    check(rating, String);
    check(review, String);

    Games.update({
      _id: id,
    }, {
      $push: {
        reviews: {
          rating,
          review,
          created_at: new Date(),
        },
      },
    });
  },
});
