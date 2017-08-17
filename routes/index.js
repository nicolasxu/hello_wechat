var express = require('express');
var router = express.Router();
var sha1 = require('sha1')
var verifySource = require('../util/verifySource.js')

var Wechat = require('../wechat/Wechat.js')
var wc = new Wechat({})

wc.verifySource()
wc.setMenu()

/* GET home page. */
router.get('/', verifySource, function(req, res, next) {

});

router.post('/', verifySource, function(req, res, next){
  console.log(req.body)
  res.send('post processed')
})


module.exports = router;
