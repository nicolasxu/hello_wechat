let config = require('../wechat/config.js')
var sha1 = require('sha1')

module.exports = verifySource

function verifySource(req, res, next) {

  var token = config.token

  var signature = req.query.signature
  var nonce = req.query.nonce
  var timestamp = req.query.timestamp
  var echostr = req.query.echostr

  if (!signature || !nonce || !timestamp) {
    return res.send ('request is not from authenticated server')
  }

  var str = [token, timestamp, nonce].sort().join('')
  var shaResult = sha1(str)

  if (shaResult === signature) {
    // passed
    if (echostr) {
      // echostr present, it is 1st verification request
      // reply echostr to verify our server
      res.send(echostr)
    } else {
      // normal request
      // pass
      next() 
    }
  } else {
    res.send ('request is not from authenticated server')
  }
}