// pages/cal/cal.js
Page({
  data: {
    id1: 'clear',
    id2: 'back',
    id3: 'history',
    id4: 'div',
    id5: 'num_7',
    id6: 'num_8',
    id7: 'num_9',
    id8: 'mul',
    id9: 'num_4',
    id10: 'num_5',
    id11: 'num_6',
    id12: 'sub',
    id13: 'num_1',
    id14: 'num_2',
    id15: 'num_3',
    id16: 'add',
    id17: 'num_0',
    id18: 'dot',
    id19: 'equals',
    result: '0',
    dotSign: false
  },
  clickButton: function(e){
    // console.log(e);
    var btnValue = e.target.id;
    var res = this.data.result;
    var newDotSign = this.data.dotSign;
    if(btnValue >= 'num_0' && btnValue <= 'num_9'){
      var num = btnValue.split('_')[1];
      if(res == '0' || res.charAt(res.length-1) == '穷'){
        res = num;
      }else{
        res += num;
      }
    }else{
      if(btnValue == 'dot'){
        if(!newDotSign){
          res = res+'.';
          newDotSign = true;
        }
      }else if(btnValue == 'clear'){
        res = '0';
        newDotSign = false;
      }else if(btnValue == 'back'){
        var length = res.length;
        if(length > 1){
          res = res.substr(0,length-1);
        }else{
          res = '0';
        }
      }else if(btnValue == 'add' || btnValue == 'sub' || btnValue == 'mul' || btnValue == 'div'){
        newDotSign = false;
        var sign;
        switch(btnValue){
          case 'add':
            sign = '+';
            break;
          case 'sub':
            sign = '-';
            break;
          case 'mul':
            sign = '*';
            break;
          case 'div':
            sign = '/';
            break;
        }
        if (!isNaN(res.charAt(res.length - 1))) {
          res += sign;
        }
      }
    }
    this.setData({
      result: res,
      dotSign: newDotSign
    });
  },

  equals: function(){
    var str = this.data.result;
    var strArr = [];
    var item = '';
    var temp = 0;
    for(var i = 0; i <= str.length; i ++){
      var ch = str.charAt(i);
      if(ch == '='){
        continue;
      }
      if((ch != '' && ch >= 0 && ch <= 9) || ch == '.'){
        item += ch;
      }else{
        strArr[temp] = item;
        temp ++;
        strArr[temp] = ch;
        temp ++;
        item = '';
      }
    }

    if(isNaN(strArr[strArr.length-1])){
      str.pop();
    }
    
    var res = strArr[0]*1;
    var num;
    console.log(strArr.length);
    for(var i = 1; i < strArr.length; i += 2){
      console.log('aa');
      if (res == '正无穷'){
        break;
      }
      num = strArr[i + 1] * 1;
      switch(strArr[i]){
        case '+':
          res += num;
          break;
        case '-':
          res -= num;
          break;
        case '*':
          res *= num;
          break;
        case '/':
          if(num != 0){
            res /= num;
          }else{
            res = '正无穷';
          }
          break;
      }
    }

    this.setData({
      result: '=' + res
    })
  }
})