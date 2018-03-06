// pages/radio/radio.js
Page({
  data: {
    balls: ['篮球','足球','羽毛球','台球'],
    color: ['red','skyblue','blue','black']
  },
  radio: function(e){
    console.log(e.detail.value);
  },
  box: function(e){
    console.log(e.detail.value);
  }
})