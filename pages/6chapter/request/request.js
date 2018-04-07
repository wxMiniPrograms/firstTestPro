// pages/6chapter/request/request.js


var util = require('../../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  test: function(){
    var appid = 56130;
    var secret = '14ed8297aab74ea9a89382f2e98381de';
    wx.request({
      url: 'https://route.showapi.com/341-1',
      data: {
        showapi_appid: appid,
        showapi_sign: secret
      },
      success: function(e){
        console.log(e);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(util);
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})