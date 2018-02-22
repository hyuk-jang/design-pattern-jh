// 프로그램 코드를 작성하다보면 기존에 만들어진 인스턴스의 내용을 일부 수정하여 사용하고 싶을 때가 있다. 그런 경우 객체를 새로 생성할 때는 사용하는 new Object() 메서드보다 [그림 5-31]처럼 clone() 메서드를 이용해 기존의 것을 복사하여 일부만 바꿔 인스턴스를 생성할 수 있다. 이런 개념을 확장하여 처음부터 일반적인 prototype(원형)을 만들어놓고, 그것을 복사한 후 필요한 부분만 수정하면 new Object() 메서드로 객체를 생성하는 것보다 편리하다.
// prototype 패턴은 이처럼 인스턴스를 복제하여 사용하는 구조이다. 따라서 생성할 객체의 원형을 제공하는 프로토타입 인스턴스로부터 생성할 객체들의 타입이 결정되도록 한다. 이 패턴은 객체를 생성할 때 갖추어야 할 기본 형태가 있을 때 사용된다.

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