// 팩토리 패턴(Factory Pattern)    
//     - 팩토리 메서드 패턴 :
//        객체를 생성하기 위한 인터페이스를 정의하는데, 어떤 클래스의 인스턴스를 만들지는 서브클래스에서 결정하게 만든다.
//        클래스의 인스턴스를 만드는 일을 서브클래스에 맡긴다.
//     - 제품을 생산하는 부분과 사용하는 부분을 분리시킬 수 있다.

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