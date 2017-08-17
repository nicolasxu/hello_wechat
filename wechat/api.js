
const config = require('./config.js')
const rp = require('request-promise')

module.exports = {
  menu: {
    delete: deleteMenu, 
    create: createMenu, 
    get: getMenu
  }
}

async function deleteMenu(accessToken) {
  let url = config.baseUrl + '/menu/delete?access_token=' + accessToken
  return rp.get(url)
}

async function createMenu(accessToken, menu) {
  let url = config.baseUrl + '/menu/create?access_token=' + accessToken

  return rp.post(url, {
    body: menu,
    json: true
  })
}

async function getMenu(accessToken) {
  let url = config.baseUrl + '/get_current_selfmenu_info?access_token='+ accessToken
  return rp.get(url)
}
