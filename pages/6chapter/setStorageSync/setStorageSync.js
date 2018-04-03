// pages/6chapter/setStorageSync/setStorageSync.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  blur: function(e){
    this.value=e.detail.value;
    console.log(this.value);
  },
  test: function(){
    // wx.setStorageSync('save', this.value);
    let test1 = wx.getStorageSync('test1')||[];
    test1.unshift(this.value);
    // wx.setStorageSync('test1',test1);
    wx.setStorage({
      key: 'test1',
      data: test1,
      success: function(e){
        console.log(e);
      }
    });
  },
  history: function(){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  remove: function(){
    wx.removeStorageSync('test1');
  },
  clear: function(){
    wx.clearStorageSync();
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