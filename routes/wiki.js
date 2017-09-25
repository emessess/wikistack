const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;


router.get('/', function(req, res, next) {
  // res.redirect('/');
  Page.findAll({})
    .then((pages) => {
      res.render('index', {
        pages: pages
      });
    }).catch(next);
});

router.get('/add', function(req, res) {
  res.render('addpage');
});

router.get('/:urltitle', function(req, res, next) {
  Page.findOne({
    where: {
      urlTitle: req.params.urltitle
    }
  }).then((foundPage) => {
    if (foundPage === null) return next(new Error('Page not found.'));
    res.render('wikipage', {
      page: foundPage
    });
  })
    .catch(next);
});

router.post('/', function(req, res, next) {
  const newPage = Page.build(req.body);
  newPage.save().then(() => res.redirect(newPage.route));
});



module.exports = router;
