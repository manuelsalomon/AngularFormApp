const Mongoose = require('../config/connect').Mongoose;
const mongoose = require('../config/connect').mongoose;

const commentModel = new mongoose.Schema({

  body: String,
  author: {type: String, required: true},
  date: {type: Date, default: Date.now}
  
})

const Comment = mongoose.model('comments', commentModel);

module.exports = Comment;
