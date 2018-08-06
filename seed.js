const {db} = require('./models')
const {Gardener} = require('./models')
const {Plot} = require('./models')
const {Vegetable} = require('./models')

db.sync({force: true})
  .then(() => {
    console.log('Database synced!');
    return Promise.all([Vegetable.create({name: 'carrot', color: 'orange', planted_on: new Date()}), Vegetable.create({name: 'broccoli', color: 'green', planted_on: new Date()})])
  })
  .then(()=> {
    return Gardener.create({favoriteVegetableId: Vegetable.id})
  })
  .then(()=> {
    return Plot.create({gardenerId: Gardener.id })
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err)
  })
  .finally(() => {
    db.close();
  })

// Vegetable.create({name: 'carrot', color: 'orange', planted_on: new Date()})
//   .then(() => {
//     db.sync();
//   });
// Vegetable.create()
//   .then((vegetable) => {

//   })
