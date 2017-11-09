// dependencies
const express = require('express');
const app = express();

// handle static files and other middleware
require('./middleware/middleware')(app, express);

// export app
module.exports = app;
