// pages/label/label.js
Page({
  data: {
    flag: false
  },
  test: function(e){
    this.setData({
      flag: true
    });
  },
  root: function(e){
    console.log(e.detail.value);
  }
})