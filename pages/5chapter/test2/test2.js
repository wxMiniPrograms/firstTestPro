// pages/test2/test2.js
Page({
  data: {
    flag:false
  },
  test: function(e){
    console.log(e);
    console.log(e.detail.value);
  }
})