let mongoose = require('mongoose');
let blueBird = require('bluebird');

mongoose.Promise = blueBird;

const Mongoose =  mongoose.connect('mongodb://localhost/blogApp');

module.exports = { 
  Mongoose : Mongoose,
  mongoose : mongoose,
  };