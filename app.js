const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const models = require('./models');
const routes = require('./routes');

app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use(express.static('public'));

models.db.sync({})
  .then(function () {
    app.listen(3000, function () {
      console.log('Server is listening on andre 3000!');
    });
  })
  .catch(console.error);

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});
