// - 중재자 패턴 (mediator pattern)

// mediator는 '중재자', '조정자', '중개인'이란 뜻이다. 단어만 보아도 무엇을 하려는지 짐작할 수 있을 것이다. mediator 패턴은 부동산 중개사, 비행기의 이착륙을 통제하는 관제탑, 중고 물건을 사고파는 사이트처럼 중간에서 연결하고 통제하는 역할을 한다.

// 객체지향 설계에서는 많은 객체가 존재하고 이들이 서로 관계를 맺으며 상호작용한다. 이때 객체의 수가 너무 많아지면 서로 통신하느라 복잡해져 객체지향에서 가장 중요한 느슨한 결합의 특성을 해칠 수 있다. 이를 해결하는 한 가지 방법은 중간에 이를 통제하고 지시할 수 있는 역할을 하는 중재자를 두는 것이다. 중재자에게 모든 것을 요구하여 통신의 빈도수를 줄여 객체지향의 목표를 달성하게 해주는 것이 바로 mediator 패턴이다.

// [그림 5-54]를 보면 mediator는 모든 통신의 중계 역할을 하는 인터페이스 객체로서 객체(colleague)들 간의 교류를 제어하고 조정한다. concreteColleague는 mediator와 통신하는 객체로서 이벤트가 발생했을 때 알리는 방법으로 colleague 인터페이스 객체를 사용한다. 여기서 각 colleague들는 mediator를 통하여 다른 colleague들과 통신한다.

'use strict';

class Mediator {
  constructor() {
  }

  ColleagueChanged(colleague) {

  }
}

class ConcreteMediator extends Mediator {
  constructor() {
    super();
    console.log('ConcreteMediator created');
    this.colleague1 = new ConcreteColleague1(this);
    this.colleague2 = new ConcreteColleague2(this);
  }

  ColleagueChanged(colleague) {
    switch(colleague) {
    case this.colleague1:
      console.log('ConcreteColleague1 has Changed -> change ConcreteColleague2.feature: ');
      this.colleague2.setFeature('new feature 2');
      break;
    case this.colleague2:
      console.log('ConcreteColleague2 has Changed, but do nothing');
      break;
    default:
      console.log('Do nothing');
    }
  }
}

class Colleague {
  constructor() {
  }

  Changed() {
    this.mediator.ColleagueChanged(this);
  }
}

class ConcreteColleague1 extends Colleague {
  constructor(mediator) {
    super();
    console.log('ConcreteColleague1 created');
    this.mediator = mediator;
    this.feature = 'feature 1';
  }

  setFeature(feature) {
    console.log('@@@ ConcreteColleague1 Feature has changed from ' + this.feature + ' to ' + feature);
    this.feature = feature;
    this.Changed();
  }
}
class ConcreteColleague2 extends Colleague {
  constructor(mediator) {
    super();
    console.log('ConcreteColleague2 created');
    this.mediator = mediator;
    this.feature = 'feature 2';
  }

  setFeature(feature) {
    console.log('### ConcreteColleague2 Feature has changed from ' + this.feature + ' to ' + feature);
    this.feature = feature;
    this.Changed();
  }
}


function init_Mediator() {
  var mediator = new ConcreteMediator();
  mediator.colleague1.setFeature('new feature 1');
  // mediator.colleague2.setFeature('new ^^^ 1');
}
init_Mediator();