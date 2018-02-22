// state의 의미는 '상태'이다. 엘리베이터의 정지, 하강, 상승 상태처럼 객체 상태도 상황에 따라 달라진다. state 패턴은 동일한 동작을 객체 상태에 따라 다르게 처리해야 할 때 사용한다.

// 이렇게 하나의 객체에 여러 가지 상태(예, 정지, 상승, 하강)가 존재할 때 패턴을 사용하지 않고 프로그래밍을 하면 if 문 또는 switch 문을 사용하여 처리한다. 그런데 신규 상태(예, 문 열림, 문 닫힘)가 발생하면 프로그램을 다시 수정해야 한다.

// 이런 경우에 state 패턴은 [그림 5-55]처럼 객체 상태를 캡슐화하여 클래스화(state 인터페이스)함으로써 그것을 참조하게 하는 방식으로 상태에 따라 다르게 처리(upState, stopState, downState)할 수 있도록 한 것이다. 따라서 변경 시(신규 상태 추가) 원시 코드의 수정을 최소화할 수 있고, 유지보수를 쉽게 할 수 있다.

'use strict';

class Contextt {
  constructor(state) {
    switch(state) {
    case 'A':
      this.state = new ConcreteStateA();
      break;
    case 'B':
      this.state = new ConcreteStateB();
      break;
    default:
      this.state = new ConcreteStateA();
    }
  }

  Request (){
    this.state.Handle(this);
  }
}

class State {
  constructor() {
  }

  Handle (){
  }
}

class ConcreteStateA extends State {
  constructor() {
    super();
    console.log('ConcreteStateA created');
  }

  Handle (context){
    console.log('ConcreteStateA handle');
  }
}

class ConcreteStateB extends State {
  constructor() {
    super();
    console.log('ConcreteStateB created');
  }

  Handle (context){
    console.log('ConcreteStateB handle');
  }
}

function init_State() {
  let context = new Contextt('A');
  context.Request();
}
init_State();