const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  res.json(req.body);
});

router.get('/add', function(req, res) {
  res.render('addpage');
});

// router.post('/add', function(req, res) {
//   console.log('any old string');
//   res.json(req.body);
// });

// router.post('/wiki', function(req, res){
//   res.json(req.body);
// });

module.exports = router;
