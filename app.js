const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

const server = app.listen(3000, function(){
  console.log('listening on port 3000');
});

app.get('/', function(req, res){
  res.render('index');
});
