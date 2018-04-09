// pages/6chapter/joke/joke.js

var url = require('../../../utils/config.js');
// console.log(url);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    loadingMore: false,
    loadingOver: false,
    pageNum: 1,
    data: [],
    color: ['one', 'two', 'three']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    });

    this.request();
  },

  request: function () {
    var self = this;
    var time = new Date().getTime();
    wx.request({
      url: url.textJoke,
      data: {
        showapi_timestamp: time,
        page: self.data.pageNum,
        maxResult: 40
      },
      success: function (e) {
        console.log(e);

        var data = e.data.showapi_res_body.contentlist;
        var length = data.length;
        if (length === 0) {
          self.setData({
            loadingMore: false,
            loadingOver: true
          });

          return;
        }

        var list = self.data.data.concat(data);
        for (var i = 0; i < data.length; i++) {
          data[i].text = self.removeHtml(data[i].text);
        }

        self.setData({
          data: list,
          flag: true,
          loadingMore: false
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    });
  },

  jump: function (e) {
    var id = e.currentTarget.id;
    var temp = JSON.stringify(this.data.data[id]);
    wx.navigateTo({
      url: '../textJoke/textJoke?data=' + temp,
    })
  },

  removeHtml: function (str) {
    return str.replace(/<[^>]+>/g, '');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  upper: function(){
    wx.startPullDownRefresh({
      
    });
  },

  lower: function () {
    this.setData({
      loadingMore: true,
      loadingOver: false,
      pageNum: this.data.pageNum + 1
    });
    this.request();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.request();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadingMore: true,
      loadingOver: false,
      pageNum: this.data.pageNum + 1
    });
    this.request();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})