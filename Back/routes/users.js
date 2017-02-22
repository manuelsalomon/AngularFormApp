const express = require('express');
const encript = require('../utils/encript').encript;
const salt = require('../utils/salt');

const router = express.Router();

// modelos importados
const User = require('../models/users');
const Log = require('../models/login');
const Response = require('../models/response');

// VALIDACIONES DEL LOGIN //

function shortUser(user) {
  return {
    _id: user._id,
    username: user.username,
    name: user.name,
    imgUrl: user.imgUrl,
  }
}

function validateLoginInputs(req, res, next) {
  User.findOne({ username: req.body.username }).then((user) => {
    req.response = new Response();
    if(!user){
      req.response.error.error = true;
      req.response.error.message = 'User not found';
      return res.send(req.response);
    }
    if(req.body.pass !== user.password){
      req.response.error.error = true;
      req.response.error.message = 'Password dont match';
      return res.send(req.response);
    }
    req.response.content = shortUser(user);
    req.response.status.isLogged = true;
    req.response.status.username = user.username;
    req.response.status._id = user._id;
    next();
  }).catch((err) => res.send(err))
}
// ------------------------------- //

// CREACION DE LA COOKIE //

function createToken(req, res, next) {
  const header = 'HmacSHA1 USER-PASS';
  const body = `${req.response.content.username}${req.response.content.password}`;
  req.salt = salt();
  req.token = encript(header, req.salt)+'.'+encript(body, req.salt);
  next();
}

function creatCookie(req, res, next) {
  res.cookie('Bearer', req.token, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
    signed: false,
  });
  next();
}
// ------------------------------- //

// Carga la conexion en la base de datos
function generateLog(req, res, next) {
  Log.findOneAndUpdate({user_id: req.response.content._id}, {
    username: req.response.content.username, 
    user_id: req.response.content._id, 
    token: req.token
  }, {upsert: true}).then((log) => {
    next();
  }).catch((err) => res.send(err))
}

// LOGOUT //

function logOut(req, res, next) {
  Log.findOneAndRemove({token: req.cookies.Bearer}).then((user) => {
    req.response = new Response();
    req.response.content = user;
    req.response.status.isLogged = false;
    res.clearCookie('Bearer');
    // res.cookie('Bearer','', { expires: new Date(0) });
    next();
  }).catch((err) => res.send(err))
}

// ------------------------------- //

// PAGINA INDIVIDUAL DE USUARIO //

function getUserById(req, res, next) {
  User.findOne({_id: req.params.id}, 'username imgUrl name posts').populate('posts')
  .then((user) => {
    if(user){
      req.response.content = user;
    }else {
      req.response.error.error = true;
      req.response.error.message = 'User ID not found'
    }
    next();
  }).catch((err) => res.send(err))
}

// ------------------------------- //

function validateLogin(req, res, next) {
  req.response = new Response();
  Log.findOne({token: req.cookies.Bearer}).then((log)=>{
    if(!log) {
      req.response.status.isLogged = false;
    }else {
      req.response.status.isLogged = true;
      req.response.status.username = log.usernam;
      req.response.status._id = log.user_id;
    }
    next();
  }).catch((err) => res.send(err))
}

function sendResponse(req, res) {
  // console.log('RESPUESTA: ', req.response)
  res.send(req.response);
}

// ROUTES //

// Checks login, generate cookie and Log in db.
router.post('/login', validateLoginInputs, createToken, creatCookie, generateLog, sendResponse);

// Logput and clear the user from Log
router.get('/logout', logOut, sendResponse);

// router.get('/:id', validateLogin, getUserById, sendResponse)

// ------------------------------- //

module.exports = router;
