const Mongoose = require('../config/connect').Mongoose;
const mongoose = require('../config/connect').mongoose;

const userModel = new mongoose.Schema({

  username: {type: String, required: true, unique: true},
  imgUrl: String,
  password: String,
  name: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}],

})

const Users = mongoose.model('users', userModel);

module.exports = Users;
