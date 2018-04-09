// pages/7chapter/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    img: ['http://img2.imgtn.bdimg.com/it/u=2298840176,1428087360&fm=27&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=161888459,1712714238&fm=27&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=3047678049,3860519935&fm=27&gp=0.jpg']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  test: function(){
    wx.chooseImage({
      count: 2,
      success: (res)=> {
        console.log(res);
        var path = res.tempFilePaths;
        console.log(path);
        wx.saveFile({
          tempFilePath: path[0],
          success: (e)=>{
            console.log(e);
            this.setData({
              src: e.savedFilePath
            })
          }
        })
      },
    });
  },

  test1: function(){
    // wx.getSavedFileInfo({
    //   filePath: 'http://store/wxd5b530b6bfa24be8.o6zAJs5gwdrs5DzjdbDTsgBM0pdo.rgvKUY77lKTc1666a651f3fd0a07d1936d549c9624d1.ico',
    //   success: function(e){
    //     console.log(e);
    //   }
    // });
    // wx.removeSavedFile({
    //   filePath: 'http://store/wxd5b530b6bfa24be8.o6zAJs5gwdrs5DzjdbDTsgBM0pdo.rgvKUY77lKTc1666a651f3fd0a07d1936d549c9624d1.ico',
    // });
    wx.getSavedFileList({
      success: function(e){
        console.log(e);
      }
    });
  },

  test: function(){

  },

  previewImage: function(){
    wx.previewImage({
      urls: this.data.img
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