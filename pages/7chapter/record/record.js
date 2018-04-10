// pages/7chapter/record/record.js

var r = wx.getRecorderManager();
var temp;

var audio = wx.createInnerAudioContext();

r.onStop(function(res){
  console.log(res);
  temp = res.tempFilePath;
});

r.onStart(function(){
  console.log('开始');
});

r.onPause(function () {
  console.log('暂停');
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  start: function(){
    r.start();
  },

  pause: function(){
    r.pause();
  },

  go: function(){
    r.resume();
  },

  stop: function(){
    r.stop();
  },

  play: function(){
    audio.src = temp;
    audio.autoplay = true;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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