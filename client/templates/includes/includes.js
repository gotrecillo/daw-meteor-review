Template.sidebar.helpers({
  categories: () => Categories.find({}, {
    sort: { 
      name: 1
    }
  })
})