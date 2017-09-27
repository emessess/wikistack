'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const models = require('./models');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.render('index');
});

models.db.sync({})
  .then(() => app.listen(3000), console.log('listening on andre 3000'))
  .catch(console.error);


