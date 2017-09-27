const express = require('express');
const router = express.Router();

const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.get('/add', (req, res, next) => {
  res.render('addpage');
});

router.get('/:urlTitle', (req, res, next) => {
  // res.send(`you reached ${req.params.urlTitle}`);
  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    }
  }).then((foundPage) => res.render('wikipage', {page: foundPage}))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const newPage = Page.build(req.body);
  newPage.save().then(() => res.redirect(newPage.route));
  

});

module.exports = router;
