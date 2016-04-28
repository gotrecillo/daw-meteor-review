import { Template } from 'meteor/templating';
import { lodash } from 'meteor/stevezhu:lodash';
import { Spacebars } from 'meteor/spacebars';
import { moment } from 'meteor/momentjs:moment';

const { truncate } = lodash;

Template.registerHelper('truncateText', (text, length) => {
  const truncatedText = truncate(text, { length, separator: ' ' });
  return new Spacebars.SafeString(truncatedText);
});

Template.registerHelper('getAvg', (reviews) => {
  if (!reviews) {
    return 0;
  }
  const sum = reviews.map(review => parseInt(review.rating, 10))
                     .reduce((a, b) => a + b);

  return Math.round(sum / reviews.length);
});

Template.registerHelper('getReviewsTotal', total => (total > 0 ? total : 0));

Template.registerHelper('formatDate', date => moment(date).format('MM-DD-YYYY'));
