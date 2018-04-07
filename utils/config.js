// var num = 123;
// var num1 = 456;

// // module.exports = num;
// module.exports = {
//   num : num,
//   num1 : num1
// };


var appid = 56130;
var secret = '14ed8297aab74ea9a89382f2e98381de';
var param = '?showapi_appid='+ appid + '&showapi_sign='+ secret;

var textJoke = 'https://route.showapi.com/341-1'+param;
var imgJoke = 'https://route.showapi.com/341-2'+param;
var gifJoke = 'https://route.showapi.com/341-3'+param;

module.exports = {
  textJoke : textJoke,
  imgJoke : imgJoke,
  gifJoke : gifJoke
};