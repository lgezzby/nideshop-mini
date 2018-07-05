var util = require('./utils/util.js');
var api = require('./config/api.js');

App({
  onLaunch: function () {
    //获取用户的登录信息
    
  },
  
  globalData: {
    userInfo: {
      nickname: 'Hi,游客',
      username: '点击去登录',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  }
})