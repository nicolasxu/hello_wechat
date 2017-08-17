module.exports = {
  appID: 'wxd35250a203467b0f',  // test account appID
  appSecret: '860a753a9ddf83d7ee8f9ad0b927ddab', // test account password
  token: 'mytoken', // user set in wechat public account
  baseUrl: 'https://api.weixin.qq.com/cgi-bin'
}

/* 

doc:
https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183

1. 通用域名(api.weixin.qq.com)，使用该域名将访问官方指定就近的接入点；
2. 上海域名(sh.api.weixin.qq.com)，使用该域名将访问上海的接入点；
3. 深圳域名(sz.api.weixin.qq.com)，使用该域名将访问深圳的接入点；
4. 香港域名(hk.api.weixin.qq.com)，使用该域名将访问香港的接入点。

example:

https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=ACCESS_TOKEN

https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET



*/