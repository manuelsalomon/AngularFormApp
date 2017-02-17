const express = require('express');
const mongoose = require('mongoose');

// Modelos importados
const Post = require('../models/posts');
const Log = require('../models/login');

const router = express.Router();

// ACCIONES DEL LISTADO DE POSTS //

// Devuelve todo el listado de posts
function getAllPosts(req, res, next) {  
  Post.find({}).then((data) => {
    req.posts = data;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

// Carga un nuevo post
function newPost(req, res, next) {
  Post.create(req.body).then((post) => {
    req.posts = post;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

// Devuelve un post particular
function getPostById(req, res, next) {
  Post.findById(mongoose.Types.ObjectId(req.params.id), (post) => {
    req.posts = post;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

// Edita un post en particular
function editPostbyId(req, res, next) {
  Post.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body).then((post) => {
    req.posts = post;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

// Borra un post en particular
function deletePostById(req, res, next) {
  Post.findOneAndRemove({_id: mongoose.Types.ObjectId(req.params.id)}).then((data) =>{
    req.posts = data;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}
// ------------------------------- //

// VALIDACIONES //

// function validateCookie(req, res, next){
//   Log.findOne({username: req.cookie.split(';')[0]},'token').then((log)=>{
//     if(log.token !== req.cookie.split(';')[1]) return res.send({error: 'Not logged'})
//     next();
//   }).catch((err) => {
//     return res.send('Catch Error', err);
//   })
// }

// function markAsOwner(req, res, next) {
  
// }
// ------------------------------- //

function sendRespond(req, res){
  res.send(req.posts);
}

// RUTAS Y METODOS //

// Devuelve todos los post
router.get('/', getAllPosts, sendRespond);

// Guarda un nuevo post segun Id
router.post('/post', newPost, sendRespond);

// Devuelve un post segun Id
router.get('/post/:id', getPostById, sendRespond);

// Edita un comentario segun Id
router.put('/post/:id', editPostbyId, sendRespond);

// Elimina un elemento segun Id
router.delete('/post/:id', deletePostById, sendRespond);
// ------------------------------- //

module.exports = router;
