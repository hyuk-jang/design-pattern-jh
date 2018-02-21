// 딱 한 객체만 생성되도록 한다.
'use strict';

let _singleton = null;

class Singleton {
  constructor (data) {
    if(!_singleton) {
      this.data = data;
      _singleton = this;
    }
    else
      return _singleton;
    console.log('Singleton class created');
  }

  SingletonOperation () {
    console.log('SingletonOperation');
  }

  GetSingletonData () {
    return this.data;
  }
}

function init_Singleton() {
  var singleton1 = new Singleton('data1');
  var singleton2 = new Singleton('data2');
  console.log(singleton1.GetSingletonData());
  console.log(singleton2.GetSingletonData());
  console.log(singleton1 instanceof Singleton);
  console.log(singleton2 instanceof Singleton);
  console.log(singleton1 === singleton2);
}
init_Singleton();