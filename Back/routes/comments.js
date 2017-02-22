const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Modelos importados
const Comment = require('../models/comment');
const Post = require('../models/posts');
const Log = require('../models/login');
const Response = require('../models/response');

// COMMENTS ACTIONS //

function addComment(req, res, next) {
  Comment.create({body: req.body.body, author: req.user}).then((comment) => {
    req.response.content = comment;
    Post.findOne({_id: req.body.postId}).then((post) => {
      post.comments.push(comment._id);
      Post.findOneAndUpdate({_id: req.body.postId},post).then(() => next())
    }).catch((err) => res.send(err))
  }).catch((err) => res.send(err))
}

function deleteComment(req, res, next) {
  Comment.findOneAndRemove({_id: mongoose.Types.ObjectId(req.params.id)}).then((comment) => {
    req.response.content = comment;
    next();
  }).catch((err) => res.send(err))
}

function editComment(req, res, next) {
  Comment.findOneAndEdit({_id: mongoose.Types.ObjectId(req.params.id)}, req.body).then((comment) => {
    req.response.content = comment;
    next();
  }).catch((err) => res.send(err))
}
// ------------------------------- //

// VALIDATION //

function validateLog(req, res, next) {
  req.response = new Response();
  if(!req.cookies.Bearer) return res.send('hola');
  Log.findOne({token: req.cookies.Bearer}, 'username user_id').then((log) => {
    req.user = log.username;
    if(!!log) {
      req.response.status.isLogged = false;
    }else {
      req.response.status.isLogged = true;
      req.response.status.username = log.usernam;
      req.response.status._id = log.user_id;
    }
    next();
  }).catch((err) => res.send(err))
}
// ------------------------------- //

function sendResponse(req, res){
  res.send(req.response);
}

// ROUTES //

router.post('/', validateLog, addComment, sendResponse);

router.post('/:id', validateLog, deleteComment, sendResponse);

router.put('/:id', validateLog, editComment, sendResponse);

// ------------------------------- //

module.exports = router;
