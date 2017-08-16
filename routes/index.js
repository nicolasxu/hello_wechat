var express = require('express');
var router = express.Router();
var sha1 = require('sha1')

var wechatConfig = require('../config/wechat.js')
var Wechat = require('../wechat/Wechat.js')
var wc = new Wechat({})
/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.query)
  // skip the validation if the request is from wechat
  res.send(req.query.echostr)

  var token = config.wechat.token

  // get value from query string
  var signature = req.query.signature
  var nonce = req.query.nonce
  var timestamp = req.query.timestamp
  var echostr = req.query.echostr

  var str = [token, timestamp, nonce].sort().join('')
  var shaResult = sha1(str)

  if (shaResult === signature) {
    res.send(signature) 
  } else {
    res.send ('wechat server validation failed')
  }
});

router.post('/', function(req, res, next){
  console.log(req.body)
  res.send('post processed')
})


module.exports = router;
