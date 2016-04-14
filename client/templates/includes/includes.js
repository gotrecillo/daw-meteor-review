import { Categories } from '../../../lib/collections';

Template.sidebar.helpers({
  categories: () => Categories.find({}, {
    sort: {
      name: 1,
    },
  }),
});
