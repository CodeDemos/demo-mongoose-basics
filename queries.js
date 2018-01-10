'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const data = require('./items.json');

mongoose.connect('mongodb://localhost/listful', { useMongoClient: true })
  .then(db => db.dropDatabase());

const itemsSchema = mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    required: true
  },
  tags: [{ type: String }],
  done: Boolean
});


const ItemModel = mongoose.model('Item', itemsSchema);


// ItemModel.deleteMany()
//   .then(console.log);


// ItemModel.insertMany(data)
//   .then(console.log)
//   .catch(console.error);


// ItemModel
//   .create({ 
//     'name': 'Computer', 
//     'tags': ['online', 'electronics'], 
//     'done': false
//   }).then(doc => {
//     console.log('Created:', doc);
//   })
//   .catch(console.error);


// const myItem = new ItemModel({ 
//   'name': 'Computer', 
//   'tags': ['online', 'electronics'], 
//   'done': false
// });
// console.log(myItem);
// myItem.save().then(console.log);


// ItemModel.deleteOne({ 'name': 'Apple' })
//   .then(console.log)
//   .catch(console.error);

// ItemModel.deleteMany({ 'name': 'Apple' })
//   .then(console.log)
//   .catch(console.error);

// ItemModel.remove({ 'name': 'Apple' })
//   .then(console.log)
//   .catch(console.error);

// ItemModel.update(
//   { done: false },
//   { done: true },
//   { multi: true }
// ).then(console.log)
//   .catch(console.error);

// ItemModel.updateOne(
//   { name: 'Apple' },
//   { done: true })
//   .then(console.log)
//   .catch(console.error);

// ItemModel.findOneAndUpdate(
//   { name: 'Lettuce' },
//   { name: 'Romaine' },
//   { new: true }
// )
//   .then(console.log)
//   .catch(console.error);

// ItemModel.findById('59c12d04b1f87101a51f86b9')
//   .then(console.log)
//   .catch(console.error);

setTimeout(() => {
  mongoose.disconnect();
}, 1000);