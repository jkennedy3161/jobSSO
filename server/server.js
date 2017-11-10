// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const api = require('./api/api');

mongoose.Promise = global.Promise;

// handle static files and other middleware
require('./middleware/middleware')(app, express);

mongoose.connect('mongodb://127.0.0.1:27017/SSO', {'useMongoClient': true});

// setup routes
app.use('/api', api);

// export app
module.exports = app;
