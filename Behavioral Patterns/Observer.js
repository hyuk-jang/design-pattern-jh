// 옵저버 패턴(Observer Pattern)
// observer는 '관찰하는 사람', '관찰자'란 뜻이다. 관찰자는 무엇인가 감시하고 있다가 관찰 대상에 변화가 생기면 이를 즉시 감지하고 알려주는 역할을 한다. 예를 들어 가정에서 아내(observer)는 남편이 퇴근하는 모습을 보고 남편 기분이 좋은지, 나쁜지, 아니면 화가 났는지 등의 상태를 파악해 아이들에게 알려준다. 아이들은 아빠의 기분 상태에 따라 각자 처신한다.

// 아빠가 화가 많이 나 있으면 큰아들은 놀다가도 열심히 공부하는 모습을 보여주고, 둘째 아들은 집안 청소하는 모습을 보여주고, 막내딸은 주방에서 설거지를 한다. 이때 엄마는 아이들에게 무엇을 하라고 말하지 않는다. 그냥 아빠가 몹시 화가 나 있다고만 얘기한다.
// 이처럼 어떤 클래스에 변화가 일어났을 때, 이를 감지하여 다른 클래스에 통보해주는 것이 observer 패턴이다. [그림 5-46]을 보면 이 패턴은 외부 객체의 상태 변화에 따라(subject 클래스) observer 객체(observer 인터페이스 클래스)는 이에 상속되어 있는 다른 객체(concreteObserver)들에게 변화된 상태를 전달하고(notify 메서드) 상속된 객체들은 그에 맞게 기능을 수행하는 형태로 구성된다.

// 이 패턴에 해당되는 예는 관심 있는 어떤 블로그를 미리 등록해놓으면 그 블로그에 새 글이 올라올 때마다 자동으로 알려주는 것과 같다. 즉 observer 패턴은 어떤 일이 생기면 미리 등록한 객체들에게 상태 변화를 알려주는 역할을 한다.

'use strict';

class Subjectt {
  constructor() {
  }

  Attach (Observer){
    this.observers.push(Observer);
    console.log('Observer attached');
  }

  Dettach (Observer){
    for(var i in this.observers)
      if(this.observers[i] === Observer)
        this.observers.splice(i, 1);
  }

  Notify (){
    console.log('Subject Notify');
    for(var i in this.observers){
      this.observers[i].Update(this);
    }
  }
}

class ConcreteSubject extends Subjectt {
  constructor() {
    super();
    this.subjectState = null;
    this.observers = [];
    console.log('ConcreteSubject created');
  }

  GetState() {
    return this.subjectState;
  }

  SetState(state) {
    this.subjectState = state;
    this.Notify();
  }
}

class Observer {
  constructor() {
  }

  Update (){
  }
}

class ConcreteObserver extends Observer {
  constructor() {
    super();
    this.observerState = '';
    console.log('ConcreteObserver created');
  }

  /**
   * 
   * @param {ConcreteSubject} Subject 
   */
  Update (Subject){
    this.observerState = Subject.GetState();
    console.log('Observer new state: ' + this.observerState);
  }
}

function init_Observer() {
  var observer1 = new ConcreteObserver();
  var observer2 = new ConcreteObserver();
  var subject = new ConcreteSubject();
  subject.Attach(observer1);
  subject.Attach(observer2);
  subject.SetState('state 1');
}
init_Observer();