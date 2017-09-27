const express = require('express');
const router = express.Router();

const models = require('../models');
const Page = models.page;
const User = models.user;

router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.post('/', (req, res, next) => {
  // res.json(req.body);
  const page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  page.save()
  

});

router.get('/add', (req, res, next) => {
  res.render('addpage');
});



module.exports = router;
