// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Client = require('../models/client');

// Routes
Client.methods(['get', 'put', 'post', 'delete']);
Client.register(router, '/Client');
// Return router
module.exports = router;