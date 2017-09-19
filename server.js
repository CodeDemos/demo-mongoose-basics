var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;

const favoriteSchema = mongoose.Schema({
  name: { 
      type: String,
      // unique: true,
      required: true
  },
  votes: { type: Number, default: 0},
  comment: String,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
 
// var myFavorite = new Favorite({
//     name: 'The Hitchhiker’s Guide to the Galaxy',
//     comments: 'I won’t enjoy it. –Marvin',
//     votes: 42
// })

// console.log(myFavorite)
// myFavorite.save().then(console.log);


// Favorite
//   .create({
//       name: 'The Hitchhiker’s Guide to the Galaxy',
//       comments: 'I won’t enjoy it. –Marvin',
//       votes: 42
//   }).then(favorite => {
//         console.log('Created favorite:', favorite.name);
//     })
//     .catch(err => {
//         console.error('Something went wrong:', err);
//     });

// const fav1 = {
//       name: 'Iron Man 1'
//   }
// const fav2 = {
//       name: 'Iron Man 2'
//   }
// const fav3 = { 
//       name: 'Iron Man 3'
//   }

// Favorite.insertMany( [ fav1, fav2, fav3] )
// .then( results => console.log(results));

// Favorite.deleteMany().then(() => {});   

// Favorite.deleteOne({  "name": "Iron Man 2" }).then(console.log)

// Favorite.deleteMany({  "name": "Iron Man 3" }).then(console.log)

// Favorite.remove({  "name": "Iron Man 1" }).then(console.log)

// Favorite.find().then(results => console.log(results));


// Favorite.update({
//   votes: 0
// }, 
// {
//   name: "Wonder Woman"
// },
// {
//   multi: true
// }).then(console.log); 


Favorite.updateOne(
  {name: 'The Hitchhiker’s Guide to the Galaxy'}, 
  {votes: "99"})  
.then(console.log); 


Favorite.findOneAndUpdate(
  {name: 'The Hitchhiker’s Guide to the Galaxy'}, 
  {comment: 'Alway bring a towel', votes: 35 },
  { new : true } 
).then(console.log)


// Favorite.findById("59c12d04b1f87101a51f86b9").then(console.log);

// Favorite.find({
//   votes: 42
// }).then(console.log);

// Favorite.find().then(console.log);


