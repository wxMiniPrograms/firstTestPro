// pages/6chapter/joke/joke.js

var url = require('../../../utils/config.js');
console.log(url);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    data: [],
    color: ['one','two','three']
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

  request: function(){
    var self = this;
    wx.request({
      url: url.textJoke,
      success: function(e){
        console.log(e);

        var data = e.data.showapi_res_body.contentlist;
        for(var i = 0; i < data.length; i ++){
          data[i].text = self.removeHtml(data[i].text);
        }

        self.setData({
          data: data,
          flag: true
        });
        wx.hideLoading();
      }
    });
  },

  jump: function(e){
    var id = e.currentTarget.id;
    var temp = JSON.stringify(this.data.data[id]);
    wx.navigateTo({
      url: '../textJoke/textJoke?data='+temp,
    })
  },

  removeHtml: function(str){
    return str.replace(/<[^>]+>/g,'');
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