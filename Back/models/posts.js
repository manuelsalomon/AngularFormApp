const Mongoose = require('../config/connect').Mongoose;
const mongoose = require('../config/connect').mongoose;

const postModel = new mongoose.Schema({

  author: {type: String, required: true},
  title: String,
  body: String,
  date: {type: Date, default: Date.now },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}],
  isOwner: {type: Boolean, default: false }
  
})

const Post = mongoose.model('posts', postModel);

module.exports = Post;
