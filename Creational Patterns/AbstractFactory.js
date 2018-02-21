// - 추상 팩토리 패턴 :
//        인터페이스를 이용하여 서로 연관된, 또는 의존하는 객체를 구상 클래스를 지정하지 않고 생성한다.
//        구상 클래스는 서브 클래스에 의해 만들어진다.

'use strict';

class AbstractFactory {
  constructor() {
  }

  createProductA (product) {
  }

  createProductB (product) {
  }
}

class ConcreteFactory1 extends AbstractFactory {
  constructor() {
    super();
    console.log('ConcreteFactory1 class created');
  }

  createProductA (product) {
    console.log('ConcreteFactory1 createProductA');
    return new ProductA1();
  }

  createProductB (product) {
    console.log('ConcreteFactory1 createProductB');
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  constructor() {
    super();
    console.log('ConcreteFactory2 class created');
  }

  createProductA (product) {
    console.log('ConcreteFactory2 createProductA');
    return new ProductA2();
  }

  createProductB (product) {
    console.log('ConcreteFactory2 createProductB');
    return new ProductB2();
  }
}

class AbstractProductA {
  constructor() {
  }
}

class AbstractProductB {
  constructor() {
  }
}


class ProductA1 extends AbstractProductA {
  constructor() {
    super();
    console.log('ProductA1 created');
  }
}

class ProductA2 extends AbstractProductA {
  constructor() {
    super();
    console.log('ProductA2 created');
  }
}

class ProductB1 extends AbstractProductB {
  constructor() {
    super();
    console.log('ProductB1 created');
    this.pb1 = 'pb1';
  }
}

class ProductB2 extends AbstractProductB {
  constructor() {
    super();
    console.log('ProductB2 created');
    this.pb2 = 'pb2';
  }
}

function init_AbstractFactory() {
  var factory1 = new ConcreteFactory1();
  var productB1 = factory1.createProductB();
    
  var factory2 = new ConcreteFactory2();
  var productB2 = factory2.createProductB();
  
}

init_AbstractFactory();