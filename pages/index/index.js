const util = require('../../utils/util.js');
const api = require('../../config/api.js');

//获取应用实例
const app = getApp()
Page({
  data: {
	hotGoods: [
	{"id":1006002,"name":"轻奢纯棉刺绣水洗四件套","goods_brief":"设计师原款，精致绣花","list_pic_url":"http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png","retail_price":899.00},
	{"id":1006007,"name":"秋冬保暖加厚澳洲羊毛被","goods_brief":"臻品级澳洲进口羊毛","list_pic_url":"http://yanxuan.nosdn.127.net/66425d1ed50b3968fed27c822fdd32e0.png","retail_price":459.00},
	{"id":1006010,"name":"秋冬保暖加厚细羊毛被","goods_brief":"细腻绵羊毛，保暖性增加一倍","list_pic_url":"http://yanxuan.nosdn.127.net/8fe022126a2789d970f82853be13a5e6.png","retail_price":659.00}],
    banner: [
	{"id":1,"ad_position_id":1,"media_type":1,"name":"合作 谁是你的菜","link":"","image_url":"http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg","content":"合作 谁是你的菜","end_time":0,"enabled":1},
	{"id":2,"ad_position_id":1,"media_type":1,"name":"合作 谁是你的菜","link":"","image_url":"http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg","content":"活动 美食节","end_time":0,"enabled":1},
	{"id":3,"ad_position_id":1,"media_type":1,"name":"活动 母亲节","link":"","image_url":"http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg","content":"活动 母亲节","end_time":0,"enabled":1}],
    channel: [
      { "id": 1, "name": "居家", "url": "/pages/category/category?id=1005000", "icon_url":"https://www.easyicon.net/download/png/504727/32/","sort_order":1},
      { "id": 2, "name": "餐厨", "url": "/pages/category/category?id=1005001", "icon_url":"https://www.easyicon.net/download/png/1200220/1362/","sort_order":2},
      { "id": 3, "name": "配件", "url": "/pages/category/category?id=1008000", "icon_url":"https://www.easyicon.net/download/png/504698/32/","sort_order":3},
  { "id": 4, "name": "服装", "url": "/pages/category/category?id=1005002", "icon_url":"https://www.easyicon.net/download/png/1216214/625/","sort_order":4},
  { "id": 5, "name": "更多", "url": "/pages/category/category?id=1019000", "icon_url":"https://www.easyicon.net/download/png/1166410/48/","sort_order":5}]
  },
  onShareAppMessage: function () {
    return {
      title: 'NideShop',
      desc: '毕业设计商城',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          hotGoods: res.data.hotGoodsList,
          banner: res.data.banner,
          channel: res.data.channel
        });
      }
    });
  },
  onLoad: function (options) {
    this.getIndexData();
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
  },
})
