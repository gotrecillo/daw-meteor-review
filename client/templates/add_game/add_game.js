import { GamesImages } from '../../../lib/collections';
import { Template } from 'meteor/templating';
import $ from 'meteor/jquery';

debugger;
Template.addGame.events({
  'submit .add_game': (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    const isFeatured = event.target.is_featured.value;
    //debugger;
    const imageFile = $('#gameImage').get().files[0];

    let image = 'img/noimage.png';

    if (imageFile) {
      fsImage = new FS.File(imageFile);

      GamesImages.insert(fsImage, (err, result) => {
        if(!err){
          image = `/cfs/files/GamesImages/${result._id}`;
        }
      })
    } 
    
    Games.insert({
      name,
      category,
      description,
      is_featured,
      image,
      ccreatedAt: new Date()
    })

    return false;
  },
});
