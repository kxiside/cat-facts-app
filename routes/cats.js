var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://catfact.ninja'

router.get('/', function(req, res, next) {
    fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(catData => {
        console.log(catData)
        res.render('cats/index', { catData })
    })
})


module.exports = router;
