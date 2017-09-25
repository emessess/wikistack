const express = require('express');
const router = express.Router();
const models = require('../models')
const Page = models.Page
const User = models.User


router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  // res.json(req.body);

      // STUDENT ASSIGNMENT:
      // add definitions for `title` and `content`

      var page = Page.build({
        title: req.body.title,
        content: req.body.content
      });
      // STUDENT ASSIGNMENT:
      // make sure we only redirect *after* our save is complete!
      // note: `.save` returns a promise or it can take a callback.
      page.save().then(() => {res.json(page)})

});

router.get('/add', function(req, res) {
  res.render('addpage');
});


module.exports = router;
