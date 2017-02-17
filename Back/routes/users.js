const express = require('express');
const User = require('../models/users');
const router = express.Router();

router.get('/login', function(req, res, next) {
  res.send(req.user);
});


router.get('/logout', function(req, res, next) {
  res.send('logout');
});

module.exports = router;
