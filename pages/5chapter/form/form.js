// pages/form/form.js
Page({
  data: {
    value: 1,
    pickers: ['aa', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc'],
    objectArr: [
      {
        user: 'loop',
        num: 34
      },
      {
        user: 'ds',
        num: 123
      },
      {
        user: 'gdf',
        num: 21
      },
      {
        user: 'aad',
        num: 13
      }
    ]
  },
  submit: function(e) {
    console.log(e);
  },
  pickderchange: function(e) {
    var value = e.detail.value;
    console.log(value);
    this.setData({
      value: value
    });
  },
  timechange: function(e){
    var value = e.detail.value;
    console.log(value);
    this.setData({
      value: value
    });
  },
  datechange: function(e){
    var value = e.detail.value;
    console.log(value);
    this.setData({
      value: value
    });
  },
  loop: function (e) {
    var value = e.detail.value;
    console.log(value);
    this.setData({
      value: value
    });
  }
})