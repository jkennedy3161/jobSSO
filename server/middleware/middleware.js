const bodyParser = require('body-parser');
const morgan = require('morgan');
const override = require('method-override');

module.exports = ((app, express) => {
  app.use(morgan('dev'));
  app.use(express.static('client'));
  app.use(bodyParser.urlencoded({'extended': 'true'}));
  app.use(bodyParser.json());
  app.use(override());
});