var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    // text:"这是一个页面"
    navList: [
      { "id": 1008002, "name": "布艺软装" },
      { "id": 1008008, "name": "被枕" },
      { "id": 1008009, "name": "床品件套" },
      { "id": 1008016, "name": "灯具" },
      { "id": 1010003, "name": "地垫" },
      { "id": 1011003, "name": "床垫" },
      { "id": 1011004, "name": "家饰" },
      { "id": 1015000, "name": "家具" },
      { "id": 1017000, "name": "宠物" },
      { "id": 1036000, "name": "夏凉" }],
    goodsList: [
      { "name": "轻奢纯棉刺绣水洗四件套", "retail_price": 899.00, "list_pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png"},
      { "name": "轻奢纯棉刺绣水洗四件套", "retail_price": 899.00, "list_pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png" },
      { "name": "轻奢纯棉刺绣水洗四件套", "retail_price": 899.00, "list_pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png" },
      { "name": "轻奢纯棉刺绣水洗四件套", "retail_price": 899.00, "list_pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png" },
      { "name": "轻奢纯棉刺绣水洗四件套", "retail_price": 899.00, "list_pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png" },
      { "name": "轻奢纯棉刺绣水洗四件套", "retail_price": 899.00, "list_pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png" }],
    id: 0,
    currentCategory: { "name": "居家", "front_name": "回家，放松身心" },
    scrollLeft: 0,
    scrollTop: 0,
    scrollHeight: 0,
    page: 1,
    size: 10000
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    if (options.id) {
      that.setData({
        id: parseInt(options.id)
      });
    }

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });


    this.getCategoryInfo();

  },
  getCategoryInfo: function () {
    let that = this;
    util.request(api.GoodsCategory, { id: this.data.id })
      .then(function (res) {

        if (res.errno == 0) {
          that.setData({
            navList: res.data.brotherCategory,
            currentCategory: res.data.currentCategory
          });

          //nav位置
          let currentIndex = 0;
          let navListCount = that.data.navList.length;
          for (let i = 0; i < navListCount; i++) {
            currentIndex += 1;
            if (that.data.navList[i].id == that.data.id) {
              break;
            }
          }
          if (currentIndex > navListCount / 2 && navListCount > 5) {
            that.setData({
              scrollLeft: currentIndex * 60
            });
          }
          that.getGoodsList();

        } else {
          //显示错误信息
        }
        
      });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    console.log(1);
  },
  onHide: function () {
    // 页面隐藏
  },
  getGoodsList: function () {
    var that = this;

    util.request(api.GoodsList, {categoryId: that.data.id, page: that.data.page, size: that.data.size})
      .then(function (res) {
        that.setData({
          goodsList: res.data.goodsList,
        });
      });
  },
  onUnload: function () {
    // 页面关闭
  },
  switchCate: function (event) {
    if (this.data.id == event.currentTarget.dataset.id) {
      return false;
    }
    var that = this;
    var clientX = event.detail.x;
    var currentTarget = event.currentTarget;
    if (clientX < 60) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft - 60
      });
    } else if (clientX > 330) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft
      });
    }
    this.setData({
      id: event.currentTarget.dataset.id
    });

    this.getCategoryInfo();
  }
})