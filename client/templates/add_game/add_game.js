import { GamesImages, Games } from '../../../lib/collections';
import { Template } from 'meteor/templating';
import { FS } from 'meteor/cfs:base-package';

Template.addGame.events({
  'submit .add_game': (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    const isFeatured = event.target.is_featured.value;
    const imageFile = $('#gameImage').get(0).files[0];

    let image = 'img/noimage.png';

    if (imageFile) {
      const fsImage = new FS.File(imageFile);

      GamesImages.insert(fsImage, (err, result) => {
        if (!err) {
          image = `/cfs/files/GamesImages/${result._id}`;
        }
      });
    }

    Games.insert({
      name,
      category,
      description,
      isFeatured,
      image,
      createdAt: new Date(),
    });
  },

});
