var express = require('express');
var router = express.Router();

//include controller 
var home = require('../controllers/home');

router.route('/').get(home.index);

module.exports = router; 