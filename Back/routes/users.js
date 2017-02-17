const express = require('express');
const encript = require('../utils/encript').encript;
const salt = require('../utils/salt');

const router = express.Router();

// modelos importados
const User = require('../models/users');
const Log = require('../models/login');

// VALIDACIONES DEL LOGIN //

function shortUser(user){
  return {
    username: user.username,
    name: user.name,
    imgUrl: user.imgUrl,
    inLogged: true,
  }
}

function validateLogin(req, res, next) {
  User.findOne({ username: req.body.user }).then((user) => {   // chequear usuario en el req
    if(!user) return res.send({error: 'User not found'})
    if(req.body.pass !== user.password) return res.send({error: 'Password dont match'})
    req.user = shortUser(user);
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}
// ------------------------------- //

// CREACION DE LA COOKIE //

function createToken(req, res, next) {
  const header = 'HmacSHA1 USER-PASS';
  const body = `${req.user.username}${req.user.password}`;
  req.salt = salt();
  req.token = encript(header, req.salt)+'.'+encript(body, req.salt);
  next();
}

function creatCookie(req, res, next) {
  res.cookie(req.body.user, req.token, {
    // httpOnly: true,
    // signed: true,
  });
  next();
}
// ------------------------------- //

function generateLog(req, res, next) {
  Log.create({username: req.user.username, token: req.token}).then((log)=>{
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

// LOGOUT //

function logOut(req, res, next) {
  // console.log(req.cookie);
  // // console.log(req.cookie.split(';')[0])
  // Log.findOneAndRemove({username: req.cookie.split(';')[0]}).then((user) => {
  //   req.user = user;
  //   res.clearCookie(user.username);
  //   next();
  // }).catch((err) => {
  //   return res.send('Catch Error', err);
  // })
}
// ------------------------------- //

function sendRespond(req, res) {
  res.send(req.user);
}

// Checks login, generate cookie and Log in db.
router.post('/login', validateLogin, createToken, creatCookie, generateLog, sendRespond);

// Logput and clear the user from Log
router.get('/logout', logOut, sendRespond);

module.exports = router;
