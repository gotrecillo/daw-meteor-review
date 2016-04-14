import { Categories } from '../../../lib/collections';
import { Template } from 'meteor/templating';

Template.sidebar.helpers({
  categories: () => Categories.find({}, {
    sort: {
      name: 1,
    },
  }),
});
