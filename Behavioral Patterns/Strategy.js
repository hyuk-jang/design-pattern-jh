// 스트래티지 패턴(Strategy Pattern)
//     - 알고리즘군을 정의하고 각각을 캐슐화하여 교환해서 사용할 수 있도록 만든다.
//     - 알고리즘을 사용하는 클라이언트와는 독립적으로 알고리즘을 변경할 수 있다.
//     - 구성을 사용한다.
//     - 일반적으로 서브클래스를 만드는 방법을 대신하여 유연성을 극대화하기 위한 용도로 쓰인다.
//     - 예: QuarkBehavior & FlyBehavior

'use strict';

class Contexttt {
  constructor(type){
    switch(type) {
    case 'A':
      this.strategy = new ConcreteStrategyA();
      break;
    case 'B':
      this.strategy = new ConcreteStrategyB();
      break;
    default:
      this.strategy = new ConcreteStrategyA();
    }
  }

  ContextInterface (){
    this.strategy.AlgorithmInterface();
  }
}

class Strategy {
  constructor() {
  }

  AlgorithmInterface (){
  }
}

class ConcreteStrategyA extends Strategy{
  constructor() {
    super();
    console.log('ConcreteStrategyA created');
  }

  AlgorithmInterface (){
    console.log('ConcreteStrategyA algorithm');
  }
}

class ConcreteStrategyB extends Strategy{
  constructor() {
    super();
    console.log('ConcreteStrategyB created');
  }

  AlgorithmInterface (){
    console.log('ConcreteStrategyB algorithm');
  }
}

function init_Strategy() {
  let contextA = new Contexttt('A');
  contextA.ContextInterface();
  let contextB = new Contexttt('B');
  contextB.ContextInterface();
}
init_Strategy();