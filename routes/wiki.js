const express = require('express');
const router = express.Router();

const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.post('/', (req, res, next) => {
  const newPage = Page.build(req.body);
  newPage.save().then(() => res.redirect(newPage.route));
  

});

router.get('/add', (req, res, next) => {
  res.render('addpage');
});



module.exports = router;
