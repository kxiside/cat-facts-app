var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('cats', { title:  'Cats Home' })
  });
  
module.exports = router;
