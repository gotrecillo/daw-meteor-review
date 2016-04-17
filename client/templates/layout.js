import { Template } from 'meteor/templating';
import { lodash } from 'meteor/stevezhu:lodash';
import { Spacebars } from 'meteor/spacebars';

const { truncate } = lodash;

Template.registerHelper('truncateText', (text, length) => {
  const truncatedText = truncate(text, { length, separator: ' ' });
  return new Spacebars.SafeString(truncatedText);
});
