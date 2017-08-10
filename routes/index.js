var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.query)
  // skip the validation if the request is from wechat
  res.send(req.query.echostr)
  // res.json('good')
  //res.render('index', { title: 'Express' });
});

module.exports = router;
