import { Meteor } from 'meteor/meteor';
import { Games } from './collections';

Meteor.methods({

  addGame: game => {
    Games.insert(game);
  },

  addReview: (id, rating, review) => {
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
