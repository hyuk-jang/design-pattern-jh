// chain of responsibility 패턴
// chain of responsibility는 책임들이 연결되어 있어 내가 책임을 못 질 것 같으면 다음 책임자에게 자동으로 넘어가는 구조를 말한다. 이런 구조가 필요한 이유를 먼저 살펴보자. 예를 들어, 학생이 학교의 한 부서(학생처)에 상담 전화를 걸었다고 생각해보자. 전화를 받은 사람이 해당 문제는 담당자가 다르다고 실제 담당자의 전화번호만 가르쳐준다면 전화를 건 학생은 일단 전화를 끊고 알려준 번호로 다시 전화를 걸어야 한다.

// 그런데 알려준 번호로 전화를했는데 이번에도 담당자가 바뀌었다며 다른 전화번호를 알려준다면 학생은 담당자와 연결될 때까지 세 번이나 전화를 걸어야 하므로 매우 불편하고 짜증이 날 것이다. 이와 달리 처음 전화를 걸었을 때 받은 사람이 담당자가 아닐 경우 전화를 끊지 않고도 담당자에게 돌려주면 매우 편리할 것이다.

// 소프트웨어 개발에서도 이렇게 자동으로 연결되는 구조로 프로그램을 만들면 매우 유용한데 이 개념을 적용할 수 있는 것이 바로 chain of responsibility 패턴이다. 학생이 전화했을 때 번호를 가르쳐주고 직접 해보라는 것은 프로그램의 특정 기능에 대한 처리가 개별적으로 하드 코딩되어 있어 연결 변경이 불가능한 구조이다. 이는 유연성이 매우 떨어진다. 반면, 학생이 전화를 했을 때 알아서 연결해주는 형태는 프로그램이 필요에 따라 동적으로 처리할 수 있는 구조이다. 이 구조는 [그림 5-51]처럼 추상 클래스를 활용하여 설계하고, 이런 구조를 chain of responsibility 패턴이라고 한다.

'use strict';
class Handler {
  constructor() {
  }
  HandleRequest() {
  }
}

class ConcreteHandler1 extends Handler {
  constructor() {
    super();
    console.log('ConcreteHandler1 created');
  }

  setSuccessor (successor) {
    this.successor = successor;
  }

  HandleRequest(request) {
    if (request === 'run')
      console.log('ConcreteHandler1 has handled the request');
    else {
      console.log('ConcreteHandler1 calls his successor');
      this.successor.HandleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  constructor() {
    super();
    console.log('ConcreteHandler2 created');
  }

  HandleRequest(request) {
    console.log('ConcreteHandler2 has handled the request');
  }
}

function init_ChainofResponsibility() {
  let handle1 = new ConcreteHandler1();
  let handle2 = new ConcreteHandler2();
  handle1.setSuccessor(handle2);
  console.log('@@@')
  handle1.HandleRequest('run');
  console.log('@@@')
  handle1.HandleRequest('stay');

}
init_ChainofResponsibility();