// 옵저버 패턴(Observer Pattern)
//     - 한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들한테 연락이 가고
//        자동으로 내용이 갱신되는 방식으로 일대다(one-to-many) 의존성을 정의한다.
//     - 주제(Subject) & 옵저버(Observer)
//     - Observable & Observer:
//          Observable 에 register, remove, notify 가 있고, 
//          Observer 에 update 가 있다. (notify 에서 update 를 호출)
//     - 예: 신문 구독 서비스, 기상관측 시스템

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