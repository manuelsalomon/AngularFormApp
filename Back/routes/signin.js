const express = require('express');
const User = require('../models/users');
const router = express.Router();

function validatePassword(req, res, next){
  if (req.body.pass1 !== req.body.pass2) return res.send({error:'Passwords dont match'});
  next();
}

function validateUser(req, res, next) {
  User.find({ username: req.body.user }).then(function(data){
    if (data.length !== 0) return res.send({error:'User taken'});
    next();
  }).catch(function(err) {
    return res.send('Catch Error', err);
  });
}

function createUser(){
  User.create(req.body).then((user) => {
    req.user = user
    next();
  })
}

router.get('/', validateUser, validatePassword, createUser, function(req, res, next) {
  res.send(req.user);
});

module.exports = router;
