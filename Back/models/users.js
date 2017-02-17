const Mongoose = require('../config/connect').Mongoose;
const mongoose = require('../config/connect').mongoose;

const userModel = new mongoose.Schema({

  username: {type: String, required: true},
  imgUrl: String,
  password: String,
  name: String,
  posts: [String],

})

const Users = mongoose.model('users', userModel);

module.exports = Users;
