const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var models = require('./models');


app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


models.db.sync({})
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on andre 3000!');
    });
})
.catch(console.error);

// models.User.sync({})
// .then(function () {
//     return models.Page.sync({})
// })
// .then(function () {
//     app.listen(3000, function () {
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error);

app.get('/', function(req, res){
  res.render('index');
});
