// - 중재자 패턴 (mediator pattern)

// 서로 관련된 객체 사이의 복잡한 통신과 제어를 한 곳으로 집중시키고자 할 때

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