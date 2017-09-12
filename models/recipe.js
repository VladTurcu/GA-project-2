const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: String,
  text: String,
  rating: Number
});


const ingredientsSchema = new mongoose.Schema({
  name: String,
  qty: String
});


const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  preparation: String,
  ingredients: [ingredientsSchema],
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [commentSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);
