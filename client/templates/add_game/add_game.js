Template.add_game.events({
  'submit .add_game': (event) => {
    const name = event.target.name.value;
    const category = event.target.category.value;
    const description = event.target.description.value;
    const is_featured = event.target.is_featured.value;
    const imageFile = $('#gameImage').get[0].files[0];

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
