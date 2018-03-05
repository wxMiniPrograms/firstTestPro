// pages/test4/test4.js
Page({
  data: {
   iconType:["success","success_no_circle","info","warn","waiting","cancel","download","search","clear"],
   iconSize:[5,10,15,20]
  },
  test: function(e){
    console.log(e.detail.value)
  },
  test1: function(e){
    console.log("我是bindchanging");
  }
})