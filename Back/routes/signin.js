const express = require('express');
const router = express.Router();

// Modulos importados
const User = require('../models/users');
const Response = require('../models/response');
const response = new Response();

// VALIDACION DE DATOS //

function validateUser(req, res, next) {
  req.response = new Response();
  User.find({ username: req.body.username }).then( data => {
    if (data.length !== 0){
      req.response.error.error = true;
      req.response.error.message = 'User taken';
      return res.send(req.response);
    }
    next();
  }).catch((err) => res.send(err));
}

function validatePassword(req, res, next) {
  if (req.body.pass !== req.body.passConfirm){
    req.response.error.error = true;
    req.response.error.message = 'Passwords dont match';
    return res.send(req.response);
  }
  next();
}
// ------------------------------- //

// CREACION DEL USUARIO //

function createUser(req, res, next) {
  User.create({
    username: req.body.username,
    password: req.body.pass,
    name: req.body.name,
  }).then((user) => {
    req.response.content = { 
      _id: user._id,
      username: user.username,
      name: user.name,
    }
    next();
  }).catch((err) => res.send(err))
}
// ------------------------------- //

router.post('/', validateUser, validatePassword, createUser, (req, res) => res.send(req.response));

module.exports = router;
