// 데코레이터 패턴(Decorator Pattern)
// decoration은 '장식(포장)'이란 뜻이다. 빵집에서 케이크를 만들 때 먼저 둥근 모양의 빵을 만든다. 이 위에 초콜릿을 바르면 초콜릿 케이크가 되고, 치즈를 바르면 치즈 케이크가 된다. 또 생크림을 바르고 과일을 많이 올려놓으면 과일 생크림 케이크가 된다.
// 이처럼 기존에 구현되어 있는 클래스(둥근 모양의 빵)에 그때그때 필요한 기능(초콜릿, 치즈, 생크림)을 추가(장식, 포장)해나가는 설계 패턴을 decorator 패턴이라고 한다. 이것은 기능 확장이 필요할 때 상속의 대안으로 사용한다.

// [그림 5-39]에서 decorator 클래스가 기존에 구현되어 있는 클래스(둥근 모양의 빵)에 해당되고, concreteDecorator 클래스는 그때그때 필요한 기능(초콜릿, 치즈, 생크림)을 추가(장식, 포장)해나가는 것에 해당된다.
'use strict';

class Componentt {
  constructor() {
  }

  Operation (){
  }
}

class ConcreteComponent extends Componentt {
  constructor() {
    super();
    console.log('ConcreteComponent created');
  }

  Operation (){
    console.log('o o');
  }
}

class Decorator extends Componentt {
  constructor(component) {
    super();
    this.component = component;
    console.log('Decorator created');
  }

  Operation (){
    this.component.Operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  constructor(component, sign) {
    super(component);
    this.addedState = sign;
    console.log('ConcreteDecoratorA created');
  }

  Operation (){
    super.Operation();
    console.log(this.addedState);
  }
}

class ConcreteDecoratorB extends Decorator {
  constructor(component, sign) {
    super(component);
    this.addedState = sign;
    console.log('ConcreteDecoratorA created');
  }

  Operation (){
    super.Operation();
    console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState);
  }

  AddedBehavior  (){
    this.Operation();
    console.log('|........|');
  }
}

function init_Decorator() {
  var component = new ConcreteComponent();
  var decoratorA = new ConcreteDecoratorA(component, '!!!');
  var decoratorB = new ConcreteDecoratorB(component, '.');
  console.log('component: ');
  component.Operation();
  console.log('decoratorA: ');
  decoratorA.Operation();
  console.log('decoratorB: ');
  decoratorB.AddedBehavior();
}
init_Decorator();