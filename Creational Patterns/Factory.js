// 생성할 구상 클래스를 서브클래스에서 결정한다.

'use strict';

class Productt {
  constructor() {
  }
}

class ConcreteProduct extends Productt {
  constructor() {
    super();
    console.log('ConcreteProduct created');
  }
}

class Creator {
  constructor() {
  }

  FactoryMethod (){

  }

  AnOperation (){
    console.log('AnOperation()');
    this.product = this.FactoryMethod();
    console.log(this.product instanceof ConcreteProduct);
  }
}

class ConcreteCreator extends Creator {

  constructor() {
    super();
    console.log('ConcreteCreator created');
  }

  FactoryMethod (){
    return new ConcreteProduct();
  }
}

function init_FactoryMethod() {
  var factory = new ConcreteCreator();
  factory.AnOperation();
}
init_FactoryMethod();