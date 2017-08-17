const Promise = require('bluebird')
const rp = require('request-promise')
const config = require('./config.js')

class Wechat {

  constructor(option) {
    this.option = option
    

  }

  verifySource() {
    console.log('verify source...')
  }

  async setMenu() {
    
    let accessToken = await this.getAccessToken()

   
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
    console.log('result of token request:', result)
    this.access_token = resultJson.access_token
    this.expires_in = resultJson.expires_in
    this.access_token_receive_time = new Date().getTime()
    return this.access_token

  }

  static distance() {
    console.log('static method distance')
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
