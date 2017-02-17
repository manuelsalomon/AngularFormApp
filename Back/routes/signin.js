const express = require('express');
const User = require('../models/users');
const router = express.Router();

// VALIDACION DE DATOS //

function validateUser(req, res, next) {
  User.find({ username: req.body.username }).then(data => {
    if (data.length !== 0) return res.send({error:'User taken'});
    next();
  }).catch(function(err) {
    return res.send('Catch Error', err);
  });
}

function validatePassword(req, res, next){
  if (req.body.pass !== req.body.passConfirm) return res.send({error:'Passwords dont match'});
  next();
}
// ------------------------------- //

// CREACION DEL USUARIO //
  
function createUser(req, res, next){
  User.create({
    username: req.body.username,
    password: req.body.pass,
    name: req.body.name,
  }).then((user) => {
    req.user = user
    next();
  })
}
// ------------------------------- //

router.post('/', validateUser, validatePassword, createUser, (req, res) => res.send(req.user));

module.exports = router;
