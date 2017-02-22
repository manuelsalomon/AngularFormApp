const express = require('express');
const mongoose = require('mongoose');

// Modelos importados
const Post = require('../models/posts');
const Log = require('../models/login');
const User = require('../models/users');
const Comments = require('../models/comment');
const Response = require('../models/response');

const router = express.Router();

// ACCIONES DEL LISTADO DE POSTS //

// Devuelve todo el listado de posts
function getAllPosts(req, res, next) {
  Post.find({}).populate('comments')
  .then((data) => {
    data.map((post) => {
      post.isOwner = (req.user == post.author);
    });
    req.response.content = data;
    next();
  }).catch((err) => res.send(err))
}

// Carga un nuevo post
function newPost(req, res, next) {
  Post.create(req.body).then((post) => {
    req.response.content = post;
    post.isOwner = (req.user == post.author);
    User.findOne({username: req.user}).then((user) =>{
      user.posts.push(post._id);
      User.findOneAndUpdate({_id: user._id}, user).then(() => next())
    })
    next();
  }).catch((err) => res.send(err))
}

// Devuelve un post particular
function getPostById(req, res, next) {
  Post.findById(mongoose.Types.ObjectId(req.params.id)).populate('comments')
  .then((post) => {
    post.isOwner = (req.user == post.author);
    req.response.content = post;
    next();
  }).catch((err) => res.send(err))
}

// Edita un post en particular
function editPostbyId(req, res, next) {
  Post.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body).then((post) => {
    req.response.content = post;
    next();
  }).catch((err) => res.send(err))
}

// Borra un post en particular
function deletePostById(req, res, next) {
  Post.findOneAndRemove({_id: mongoose.Types.ObjectId(req.params.id)}).then((data) => {
    req.response.content = data;
    next();
  }).catch((err) => res.send(err))
}
// ------------------------------- //

// VALIDACIONES //

function validateCookie(req, res, next) {
  req.response = new Response();
  if(req.cookies.Bearer) {
    Log.findOne({token: req.cookies.Bearer}).then((log)=>{
      req.user = log.username;
      req.response.status.isLogged = !!log;
      if (!!log) {
        req.response.status.username = log.username;
        req.response.status._id = log.user_id;
      }
      next();
    }).catch((err) => res.send(err))
  }else{
    next();
  }
}

// ------------------------------- //

function sendResponse(req, res) {
  res.send(req.response);
}

// RUTAS //

// Devuelve todos los post
router.get('/', validateCookie, getAllPosts, sendResponse);

// Guarda un nuevo post segun Id
router.post('/post', validateCookie, newPost, sendResponse);

// Devuelve un post segun Id
router.get('/post/:id', validateCookie, getPostById, sendResponse);

// Edita un comentario segun Id
router.put('/post/:id', validateCookie, editPostbyId, sendResponse);

// Elimina un elemento segun Id
router.delete('/post/:id', validateCookie, deletePostById, sendResponse);
// ------------------------------- //

module.exports = router;
