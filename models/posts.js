const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: String,
  text: String,
  rating: Number
});


const postSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  image: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);
