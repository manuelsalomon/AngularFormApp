const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/posts');

const router = express.Router();

// Toma solo los valores a mostrar en el listado general de posts
// function formatPost(data) {
//   let shortPosts = [];
//   data.forEach((obj) => {
//     shortPosts.push({
//       author: obj.author,
//       title: obj.title,
//       _id: obj._id,
//       isOwner: obj.isOwner,
//     })
//   })
//   return shortPosts;
// }

function getAllPosts(req, res, next) {  
  Post.find({}).then((data) => {
    req.posts = data;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

function newPost(req, res, next) {
  Post.create(req.body).then((post) => {
    req.posts = post;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

function getPostById(req, res, next) {
  Post.findById(mongoose.Types.ObjectId(req.params.id), (post) => {
    req.posts = post;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

function editPostbyId(req, res, next) {
  Post.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body).then((post) => {
    req.posts = post;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

function deletePostById(req, res, next) {
  Post.findOneAndRemove({_id: mongoose.Types.ObjectId(req.params.id)}).then((data) =>{
    req.posts = data;
    next();
  }).catch((err) => {
    return res.send('Catch Error', err);
  })
}

function sendRespond(req, res){
  res.send(req.posts);
}

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

module.exports = router;
