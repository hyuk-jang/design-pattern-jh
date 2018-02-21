// 어떤 클래스의 인스턴스를 만드는 것이 자원/시간을 많이 잡아먹거나 복잡한 경우

'use strict';

class Prototype {
  constructor(prototype) {
  }

  Clone (){
  }
}

class ConcretePrototype1 extends Prototype {
  constructor() {
    console.log('ConcretePrototype1 created');
    super();
    this.feature = 'feature 1';
    this.obj = {a: 1};
  }

  setFeature(key, val) {
    this[key] = val;
  }

  Clone (){
    console.log('custom cloning function');
    let clone = new ConcretePrototype1();
    let keys = Object.keys(this);

    keys.forEach(k => clone.setFeature(k, this[k]));

    console.log('ConcretePrototype1 cloned');
    return clone;
  }

  cry(key){
    console.log('cry', this[key], '@@@', this.obj.a);
  }
}

class ConcretePrototype2 extends Prototype {
  constructor() {
    console.log('ConcretePrototype2 created');
    super();
  }

  Clone (){
    console.log('ConcretePrototype2 cloned');
    return clone;
  }
}

function init_Prototype () {
  var proto1 = new ConcretePrototype1();
  proto1.setFeature('feature', 'feature 22');
  var clone1 = proto1.Clone();
  console.log(clone1.feature);
  clone1.cry('feature');
  clone1.feature = 33;
  clone1.obj.a = 2;

  var clone2 = proto1.Clone();
  clone1.cry('feature');
  clone2.cry('feature');
}
init_Prototype ();