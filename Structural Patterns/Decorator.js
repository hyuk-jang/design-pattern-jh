// 데코레이터 패턴(Decorator Pattern)
//     - 객체에 추가적인 요건을 동적으로 첨가한다.
//     - 데코레이터는 서브클래스를 만드는 것을 통해서 기능을 유연하게 확장할 수 있는 방법을 제공한다.    
//     - 예: 스타버즈 커피
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