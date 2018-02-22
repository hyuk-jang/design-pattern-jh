// bridge는 '무엇인가를 연결한다'는 의미이다. bridge 패턴도 두 장소를 연결하는 역할을 한다. bridge 패턴은 기능의 클래스 계층과 구현의 클래스 계층을 연결하고, 구현부에서 추상 계층을 분리하여 각자 독립적으로 변형할 수 있게 해준다.

// [그림 5-37]에서 supperClass의 method()는 implementor의 impMethod()를 사용해 구현되고, subClass의 subMethod()는 supperClass의 method()들을 사용해 구현된다. 그 결과 subClass와 implementor(concreteImplement)가 분리된다. bridge 패턴은 구현과 인터페이스(추상화된 부분)를 분리할 수 있고, 추상화된 부분과 실제 구현 부분을 독립적으로 확장할 수 있다.

'use strict';

class Abstraction {
  constructor() {
  }

  Operation (){
    this.imp.OperationImp();
  }
}


class RefinedAbstraction extends Abstraction {
  constructor() {
    super();
    console.log('RefinedAbstraction created');
  }

  setImp (imp) {
    this.imp = imp;
  }

}


class Implementor {
  constructor() {
  }

  OperationImp (){
  }
}


class ConcreteImplementorA extends Implementor {
  constructor() {
    super();
    console.log('ConcreteImplementorA created');
  }

  OperationImp (number){
    console.log('ConcreteImplementorA OperationImp');
  }
}

class ConcreteImplementorB extends Implementor {
  constructor() {
    super();
    console.log('ConcreteImplementorB created');
  }

  OperationImp (object){
    console.log('ConcreteImplementorB OperationImp');
  }
}

function init_Bridge() {
  var abstraction = new RefinedAbstraction();
  var state = Math.floor(Math.random()*2);
  if(state)
    abstraction.setImp(new ConcreteImplementorA());
  else
    abstraction.setImp(new ConcreteImplementorB());

  abstraction.Operation();
  
}
init_Bridge();