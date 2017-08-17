var express = require('express');
var router = express.Router();

router.post('/case', function (req, res, next) {
  res.send('post case...')
})


module.exports = router