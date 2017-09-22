const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(morgan('dev'))

const server = app.listen(3000, function(){
  console.log('listening on port 3000')
})

app.get('/', function(req, res){
  res.send('you got the home page')
})
