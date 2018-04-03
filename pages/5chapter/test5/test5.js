// pages/test5/test5.js
Page({
  data: {
  
  },
  test: ()=>{
    var num = 12;
    var num1 = 14;
    var str = `${num}+${num1}=${num + num1}`;
    var str1 = '${num} + ${num1}=${num + num1}';
    console.log(str);
    console.log(str1);
  }
})