var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    id: 0,
    goods: {"name":"轻奢纯棉刺绣水洗四件套","goods_brief":"设计师原款，精致绣花","retail_price":899.00},
    gallery: [
	{"id":0,"img_url":"http://yanxuan.nosdn.127.net/2597f9e2e41093f50761837eb4c2e6be.jpg"},
	{"id":1,"img_url":"http://yanxuan.nosdn.127.net/2597f9e2e41093f50761837eb4c2e6be.jpg"},
	{"id":2,"img_url":"http://yanxuan.nosdn.127.net/4377adc892bf9d16f9d0fd78f88a6986.jpg"}],
    number: 1,
    noCollectImage: "/static/images/icon_collect.png",
    hasCollectImage: "/static/images/icon_collect_checked.png",
    collectBackImage: "/static/images/icon_collect.png"
  },
  getGoodsInfo: function () {
    let that = this;
   
    let goods_desc = '<p><img src=\"http://yanxuan.nosdn.127.net/2597f9e2e41093f50761837eb4c2e6be.jpg\" _src=\"http://yanxuan.nosdn.127.net/2597f9e2e41093f50761837eb4c2e6be.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4377adc892bf9d16f9d0fd78f88a6986.jpg\" _src=\"http://yanxuan.nosdn.127.net/4377adc892bf9d16f9d0fd78f88a6986.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/986bd3a7517a356265049443cbb747d9.jpg\" _src=\"http://yanxuan.nosdn.127.net/986bd3a7517a356265049443cbb747d9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5cdf3958b3a8d9982b879e3fea1fd616.jpg\" _src=\"http://yanxuan.nosdn.127.net/5cdf3958b3a8d9982b879e3fea1fd616.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/47e5be34ef476258f44f307982c705d4.jpg\" _src=\"http://yanxuan.nosdn.127.net/47e5be34ef476258f44f307982c705d4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a2220e4cbb5ebc49e9cecb64176983d9.jpg\" _src=\"http://yanxuan.nosdn.127.net/a2220e4cbb5ebc49e9cecb64176983d9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/dee62e466465b370c349e37fccd3b596.jpg\" _src=\"http://yanxuan.nosdn.127.net/dee62e466465b370c349e37fccd3b596.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c021b91f965ac022182eb03b2780e5de.jpg\" _src=\"http://yanxuan.nosdn.127.net/c021b91f965ac022182eb03b2780e5de.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b9f7afd9441928d7f670fd7879ba869d.jpg\" _src=\"http://yanxuan.nosdn.127.net/b9f7afd9441928d7f670fd7879ba869d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8a73b69a2fefbd154a2a6ad45102b565.jpg\" _src=\"http://yanxuan.nosdn.127.net/8a73b69a2fefbd154a2a6ad45102b565.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5836d918faa9b11eb8d9f97f9787cda9.jpg\" _src=\"http://yanxuan.nosdn.127.net/5836d918faa9b11eb8d9f97f9787cda9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8216a8addae2f02a5a570ef45d5ecffc.jpg\" _src=\"http://yanxuan.nosdn.127.net/8216a8addae2f02a5a570ef45d5ecffc.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/da382973dcb0e524a36519baab880204.jpg\" _src=\"http://yanxuan.nosdn.127.net/da382973dcb0e524a36519baab880204.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/f1c6e84d49f74e228bc57934ec7b7500.jpg\" _src=\"http://yanxuan.nosdn.127.net/f1c6e84d49f74e228bc57934ec7b7500.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/2f1d0a20e54d3e2e59a44ffe44ebe405.jpg\" _src=\"http://yanxuan.nosdn.127.net/2f1d0a20e54d3e2e59a44ffe44ebe405.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a39f2c7580ce5cadc62e8b39d58aca71.jpg\" _src=\"http://yanxuan.nosdn.127.net/a39f2c7580ce5cadc62e8b39d58aca71.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c71dc416f04615b634d2b6cd0c4215ee.jpg\" _src=\"http://yanxuan.nosdn.127.net/c71dc416f04615b634d2b6cd0c4215ee.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/06ac26ed7d870c5c6f0ce3e07c629471.jpg\" _src=\"http://yanxuan.nosdn.127.net/06ac26ed7d870c5c6f0ce3e07c629471.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/99b180d02726e0213e54dddf4b9b32fd.jpg\" _src=\"http://yanxuan.nosdn.127.net/99b180d02726e0213e54dddf4b9b32fd.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/97de8d2687052976e51fff40d04af2ce.jpg\" _src=\"http://yanxuan.nosdn.127.net/97de8d2687052976e51fff40d04af2ce.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3f527003599be237095995c98039ef87.jpg\" _src=\"http://yanxuan.nosdn.127.net/3f527003599be237095995c98039ef87.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ec30289dc1b2beb4b84a08c02a97ef6e.jpg\" _src=\"http://yanxuan.nosdn.127.net/ec30289dc1b2beb4b84a08c02a97ef6e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/685da1eaddcd26e8e2a1ff4d5d83f29f.jpg\" _src=\"http://yanxuan.nosdn.127.net/685da1eaddcd26e8e2a1ff4d5d83f29f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/2610f487a733a88973d101dcd1766ee1.jpg\" _src=\"http://yanxuan.nosdn.127.net/2610f487a733a88973d101dcd1766ee1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/eab3633e648ab2e8412c6801feb6231e.jpg\" _src=\"http://yanxuan.nosdn.127.net/eab3633e648ab2e8412c6801feb6231e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/7b6c4f220592ea7d5af0072a816fe946.jpg\" _src=\"http://yanxuan.nosdn.127.net/7b6c4f220592ea7d5af0072a816fe946.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/310a777685204ece08592a6e2716c6c9.jpg\" _src=\"http://yanxuan.nosdn.127.net/310a777685204ece08592a6e2716c6c9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/198239985c74597717e639089ffae25f.jpg\" _src=\"http://yanxuan.nosdn.127.net/198239985c74597717e639089ffae25f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/dec6b498c899351fe94d99a6dde0ee79.jpg\" _src=\"http://yanxuan.nosdn.127.net/dec6b498c899351fe94d99a6dde0ee79.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/516a17ca73846bc871902b298ce38a97.jpg\" _src=\"http://yanxuan.nosdn.127.net/516a17ca73846bc871902b298ce38a97.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d8231b81b5ba0e1c244074598c19f003.jpg\" _src=\"http://yanxuan.nosdn.127.net/d8231b81b5ba0e1c244074598c19f003.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/92c704dcf169e9a177a3c762a6a54a46.jpg\" _src=\"http://yanxuan.nosdn.127.net/92c704dcf169e9a177a3c762a6a54a46.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5b9294ad5f78d890453d4a225feed518.jpg\" _src=\"http://yanxuan.nosdn.127.net/5b9294ad5f78d890453d4a225feed518.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/9bb1b8fdfaa7f895bdd7d5c65c42a59b.jpg\" _src=\"http://yanxuan.nosdn.127.net/9bb1b8fdfaa7f895bdd7d5c65c42a59b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/f342e6d6b75dc1f80972feb415fd4e75.jpg\" _src=\"http://yanxuan.nosdn.127.net/f342e6d6b75dc1f80972feb415fd4e75.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6c9597cf206066861b3244f634c98e32.jpg\" _src=\"http://yanxuan.nosdn.127.net/6c9597cf206066861b3244f634c98e32.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/970d4dad7d958293fd41ec1f444684f1.jpg\" _src=\"http://yanxuan.nosdn.127.net/970d4dad7d958293fd41ec1f444684f1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6f93819b03de07abef8b2d94f1d5c84b.jpg\" _src=\"http://yanxuan.nosdn.127.net/6f93819b03de07abef8b2d94f1d5c84b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/58c8c56aac61da4ee9fcf34930b76e4e.jpg\" _src=\"http://yanxuan.nosdn.127.net/58c8c56aac61da4ee9fcf34930b76e4e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/fb6435ec714189d6ad5053bf12d41db7.jpg\" _src=\"http://yanxuan.nosdn.127.net/fb6435ec714189d6ad5053bf12d41db7.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/19cc85ae097247d5d868df993de64e7b.jpg\" _src=\"http://yanxuan.nosdn.127.net/19cc85ae097247d5d868df993de64e7b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/0ab8e27757cabd39fccdb5fd8ef7b013.jpg\" _src=\"http://yanxuan.nosdn.127.net/0ab8e27757cabd39fccdb5fd8ef7b013.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/03e6f02f8f77b71a82a05dd1a9705057.jpg\" _src=\"http://yanxuan.nosdn.127.net/03e6f02f8f77b71a82a05dd1a9705057.jpg\" style=\"\"/></p><p><br/></p>';
        WxParse.wxParse('goodsDetail', 'html', goods_desc, that);
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id: parseInt(options.id)
      // id: 1181000
    });
    var that = this;
    this.getGoodsInfo();
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  }
})