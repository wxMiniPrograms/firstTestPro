// pages/test1/test1.js
Page({
  data: {
    name: "张三"
  },
  test: function(e){
    console.log(e.target.dataset.root);
    console.log(e);
    this.setData({
      name: "hhhh"
    });
  }
})