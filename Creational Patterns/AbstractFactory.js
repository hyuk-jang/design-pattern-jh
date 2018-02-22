// - 추상 팩토리 패턴 :
// abstract factory는 '추상적인 공장'이란 뜻으로, [그림 5-33]과 같이 여러 개의 concrete Product를 추상화시킨 것이다. 따라서 구체적인 구현은 concrete Product 클래스에서 이루어진다. abstract factory에서는 사용자에게 인터페이스(API)를 제공하고, 인터페이스만 사용해서 부품을 조립하여 만든다. 즉 추상적인 부품을 조합해서 추상적인 제품을 만든다.

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