const Promise = require('bluebird')
const rp = require('request-promise')
const config = require('./config.js')
const util = require('./wechat_util.js')
const path = require('path')
const fs = require('fs')
const api = require('./api.js')
const menu = require('./menu.js')
// load template
let replyTemplateStr = fs.readFileSync(path.resolve(__dirname, './replyMsgTemplate.html'), 'utf8')


class Wechat {

  constructor(option) {
    this.option = option
    

  }

  async setMenu() {
    
    let accessToken = await this.getAccessToken()
    console.log('accessToken: ' + accessToken)
    var res1 = await api.menu.delete(accessToken)
    console.log('delete menu res: ')
    console.log(res1)
    var res2 = await api.menu.create(accessToken, menu)
    console.log('create menu res: ')
    console.log(res2)
    let menuBack = await api.menu.get(accessToken)
    console.log('set menu should be done...')
    console.log(menuBack)
  }

  async getAccessToken() {
    /*
    this.access_token = 'kkkkkk'
    this.expires_in = 7200
    this.access_token_receive_time = 123456
    */
    const timeBuffer = 60 * 10 * 1000 // 10 min
    if (this.access_token && this.expires_in && this.access_token_receive_time) {
      // if any of the above data exist
      // check expire
      let currentTime = new Date().getTime() 
      if (currentTime - this.access_token_receive_time < this.expires_in * 1000 - timeBuffer) {
        // token is valid

        return this.access_token
      }
    }

    let result = await rp.get(config.baseUrl + '/token?' + 
      'grant_type=client_credential&appid=' + config.appID +
      '&secret=' + config.appSecret)
    let resultJson = JSON.parse(result)
    
    this.access_token = resultJson.access_token
    this.expires_in = resultJson.expires_in
    this.access_token_receive_time = new Date().getTime()
    return this.access_token
  }

  async handleMsg(rawJson) {
    let parsedMsg = util.parseMessage(rawJson)
    console.log('parsedMsg.msgtype: ')
    console.log(parsedMsg.msgtype)
    if (!parsedMsg.msgtype) {
      // no type do norhing
      return ''
    }
    let createTime = new Date().getTime()
    let result = '<xml>' +
        '<ToUserName><![CDATA['+ parsedMsg.fromusername +']]></ToUserName>' +
        '<FromUserName><![CDATA['+ parsedMsg.tousername +']]></FromUserName>' +
        '<CreateTime>' + createTime + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[终于等到你，还好我没放弃. Finally you are off the beaten path]]></Content>' +
      '</xml>'
    return result
  }



  static distance() {

  }
}


module.exports = Wechat

/* 
1. get wechat access token
2. set menu
3. get articles
4. built demo HTML5 page
4. go to a HTML 5 page with unionID
5. get user info from unionID in Html5 page
6. submit form
7. sent to Streak
8. send Email
*/
