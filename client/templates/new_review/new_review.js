import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { FlashMessages } from 'meteor/mrt:flash-messages';

Template.newReview.events({
  'submit .new-review': (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const review = event.target.review.value;
    const id = event.target.id.value;

    Meteor.call('addReview', id, rating, review);

    FlashMessages.sendSuccess('Review Added');
    Router.go('/');
  },

});
