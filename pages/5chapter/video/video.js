// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    list:[
      {
        text: '呵呵',
        color: '#000',
        time: 2
      },
      {
        text: '嘻嘻嘻',
        color: '#3380eb',
        time: 2
      }
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  play: function(){
    console.log('播放中');
  },
  pause: function(){
    console.log('停止中');
  },
  videoPlay: function(){
    this.create.play();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.create = wx.createVideoContext('my');
  },

  blur: function(e){
    this.value = e.detail.value;
  },
  send: function(){
    this.create.sendDanmu({
      text: this.value,
      color: '#3380eb'
    });
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