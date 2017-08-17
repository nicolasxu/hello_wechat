var express = require('express');
var router = express.Router();
var sha1 = require('sha1')
var verifySource = require('../util/verifySource.js')

var Wechat = require('../wechat/Wechat.js')
var wc = new Wechat({})

wc.setMenu()

/* GET home page. */
router.get('/', verifySource, function(req, res, next) {

});

router.post('/', async function(req, res, next){
  console.log(req.body)
  let xmlResponse = await wc.handleMsg(req.body.xml)
  console.log('xmlResponse: ')
  console.log(xmlResponse)
  res.type('application/xml').send(xmlResponse)

})

router.get('/newcase', function(req, res, next) {
  // html
  // css
  // javascript


})




module.exports = router
