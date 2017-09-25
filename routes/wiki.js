const express = require('express');
const router = express.Router();
const models = require('../models')
const Page = models.Page
const User = models.User


router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/:urltitle', function(req, res, next) {
  Page.findOne({
    where: {
      urlTitle: req.params.urltitle
    }
  }).then((foundPage) => res.json(foundPage))
    .catch(next);
});

router.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
  page.save().then(() => res.json(page));
});

router.get('/add', function(req, res) {
  res.render('addpage');
});


module.exports = router;
