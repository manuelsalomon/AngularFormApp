const Mongoose = require('../config/connect').Mongoose;
const mongoose = require('../config/connect').mongoose;

const logModel = new mongoose.Schema({

  username: {type: String, required: true},
  token: {type: String, required: true},
  
})

const Log = mongoose.model('login', logModel);

module.exports = Log;
