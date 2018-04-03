// pages/ES6/ES6.js
Page({
  data: {
    name: 'loop'
  },
  test: function() {
    var Root = function() {
      
    };
    Root.prototype.eat = function() {
      console.log('es5 Eat');
    };
    Root.doing = function() {
      console.log('es5 Doing');
    };

    let a = new Root();
    a.eat();
    Root.doing();


    class Roots {
      constructor() {

      }
      eat() {
        console.log('Es6 eat');
      }
      static doing() {
        console.log('Es6 doing');
      }
    }
    let b = new Roots();
    b.eat();
    Roots.doing();
  }
})