var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    navList: [
      { "id": 1005000, "name": "居家", "front_desc": "回家，放松身心", "wap_banner_url": "http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png", "front-name":"回家，放松身心"},
      { "id": 1005001, "name": "餐厨", "front_desc": "厨房", "wap_banner_url": "http://yanxuan.nosdn.127.net/3708dbcb35ad5abf9e001500f73db615.png", "front-name": "爱，囿于厨房" },
      { "id": 1005002, "name": "饮食", "front_desc": "好吃，高颜值美食", "wap_banner_url": "http://yanxuan.nosdn.127.net/fb670ff3511182833e5b035275e4ac09.png", "front-name": "好吃，高颜值美食" },
      { "id": 1008000, "name": "配件", "front_desc": "配角，亦是主角", "wap_banner_url": "http://yanxuan.nosdn.127.net/02f9a44d05c05c0dd439a5eb674570a2.png", "front-name": "配角，亦是主角" },
      { "id": 1010000, "name": "服装", "front_desc": "贴身的，要亲肤", "wap_banner_url": "http://yanxuan.nosdn.127.net/622c8d79292154017b0cbda97588a0d7.png", "front-name": "贴身的，要亲肤" },
      { "id": 1011000, "name": "婴童", "front_desc": "爱，从心开始", "wap_banner_url": "http://yanxuan.nosdn.127.net/9cc0b3e0d5a4f4a22134c170f10b70f2.png", "front-name": "爱，从心开始" },
      { "id": 1012000, "name": "杂货", "front_desc": "解忧，每个烦恼", "wap_banner_url": "http://yanxuan.nosdn.127.net/547853361d29a37282f377b9a755dd37.png", "front-name": "解忧，每个烦恼" },
      { "id": 1013001, "name": "洗护", "front_desc": "亲肤之物，严选天然", "wap_banner_url": "http://yanxuan.nosdn.127.net/1526ab0f5982722adbc8726f9f2a338c.png", "front-name": "亲肤之物，严选天然" },
      { "id": 1019000, "name": "志趣", "front_desc": "爱好，点缀生活", "wap_banner_url": "http://yanxuan.nosdn.127.net/1706e24a5e605870ba3b37ff5f49aa18.png", "front-name": "爱好，点缀生活" }],
    categoryList: [],
    currentCategory: {
      "id": 1005000, "name": "居家", "wap_banner_url": "http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png", "front-name": "回家，放松身心", "subCategoryList": [
        { "id": 1008002, "name": "布艺软装",  "wap_banner_url": "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png"},
        { "id": 1008008, "name": "被枕", "wap_banner_url": "http://yanxuan.nosdn.127.net/b43ef7cececebe6292d2f7f590522e05.png" },
        { "id": 1008009, "name": "床品件套", "wap_banner_url": "http://yanxuan.nosdn.127.net/81f671bd36bce05d5f57827e5c88dd1b.png" },
        { "id": 1008016, "name": "灯具", "wap_banner_url": "http://yanxuan.nosdn.127.net/f702dc399d14d4e1509d5ed6e57acd19.png" },
        { "id": 1010003, "name": "地垫", "wap_banner_url": "http://yanxuan.nosdn.127.net/1611ef6458e244d1909218becfe87c4d.png" },
        { "id": 1011003, "name": "床垫", "wap_banner_url": "http://yanxuan.nosdn.127.net/d6e0e84961032fc70fd52a8d4d0fb514.png" },
        { "id": 1011004, "name": "家饰", "wap_banner_url": "http://yanxuan.nosdn.127.net/79275db76b5865e6167b0fbd141f2d7e.png" },
        { "id": 1015000, "name": "家具", "wap_banner_url": "http://yanxuan.nosdn.127.net/d5d41841136182bf49c1f99f5c452dd6.png" },
        { "id": 1017000, "name": "宠物", "wap_banner_url": "http://yanxuan.nosdn.127.net/dae4d6e89ab8a0cd3e8da026e4660137.png" },
        { "id": 1036000, "name": "夏凉", "wap_banner_url": "http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png" }]
        },
    scrollLeft: 0,
    scrollTop: 0,
    goodsCount: 239,
    scrollHeight: 0
  },
  onLoad: function (options) {
    this.getCatalog();
  },
  getCatalog: function () {
    //CatalogList
    let that = this;
    // wx.showLoading({
    //   title: '加载中...',
    // });
    util.request(api.CatalogList).then(function (res) {
        that.setData({
          //navList: res.data.categoryList,
          //currentCategory: res.data.currentCategory
        });
        wx.hideLoading();
      });
    util.request(api.GoodsCount).then(function (res) {
      that.setData({
        //goodsCount: res.data.goodsCount
      });
    });

  },
  getCurrentCategory: function (id) {
    let that = this;
    util.request(api.CatalogCurrent, { id: id })
      .then(function (res) {
        that.setData({
          currentCategory: res.data.currentCategory
        });
      });
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
  getList: function () {
    var that = this;
    util.request(api.ApiRootUrl + 'api/catalog/' + that.data.currentCategory.cat_id)
      .then(function (res) {
        that.setData({
          categoryList: res.data,
        });
      });
  },
  switchCate: function (event) {
    var that = this;
    var currentTarget = event.currentTarget;
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }

    this.getCurrentCategory(event.currentTarget.dataset.id);
  }
})