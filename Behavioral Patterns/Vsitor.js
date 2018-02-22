// visitor는 '방문자'란 뜻이다. 정수기 필터를 주기적으로 교환해주는 방문자, 화장실 비데를 청소하고 소독해주는 방문자처럼 소프트웨어를 개발할 때도 visitor 패턴을 이용해 방문자 역할을 구현할 수 있다.

// visitor 패턴의 핵심 내용은 [그림 5-49]처럼 각 클래스의 데이터 구조로부터 처리 기능을 분리하여 별도의 visitor 클래스로 만들어놓고 해당 클래스의 메서드(visitElement A, visitElement B)가 각 클래스를 돌아다니며 특정 작업을 수행하도록 하는 것이다. 특정 일을 수행하는 메서드는 visitor 클래스에 맡겨놓고, 각 클래스는 방문자가 왔을 때 accept() 메서드를 이용해 문을 열어주기만 하면 된다. 즉 visitor 패턴을 이용해 특정 클래스의 데이터 구조와 그 구조 내부를 돌아다니면서 수행하는 특정 작업(로직)을 분리할 수 있다.

// 일반적으로 객체지향의 객체는 자신의 기능(메서드)을 가지고 있으면서 캡슐화 개념을 적용하지만, visitor 패턴은 객체의 구조와 기능을 분리한다. 따라서 객체의 구조는 변경하지 않으면서 기능만 따로 추가하거나 확장할 때 많이 사용한다. 클래스의 데이터 구조 변경 없이 기존 작업(기능) 외에 다른 작업을 추가하기가 수월하다는 장점이 있다.

'use strict';

class Visitor {
  constructor() {
  }

  VisitConcreteElementA (ConcreteElementA){
  }

  VisitConcreteElementB (ConcreteElementB){
  }  
}

class ConcreteVisitor1 extends Visitor {
  constructor() {
    super();
    console.log('ConcreteVisitor1 created');
  }

  VisitConcreteElementA (ConcreteElementA){
    console.log('ConcreteVisitor1 visited ConcreteElementA');
  }

  VisitConcreteElementB (ConcreteElementB){
    console.log('ConcreteVisitor1 visited ConcreteElementB');
  }  
}

class ConcreteVisitor2 extends Visitor {
  constructor() {
    super();
    console.log('ConcreteVisitor2 created');
  }

  VisitConcreteElementA (ConcreteElementA){
    console.log('ConcreteVisitor2 visited ConcreteElementA');
  }

  VisitConcreteElementB (ConcreteElementB){
    console.log('ConcreteVisitor2 visited ConcreteElementB');
  }  
}

class ObjectStructure {
  constructor() {
    console.log('ObjectStructure created');
  }
}

class Element {
  constructor() {
  }

  Accept (visitor){
  }
}

class ConcreteElementA extends Element {
  constructor() {
    super();
    console.log('ConcreteElementA created');
  }

  Accept (visitor){
    visitor.VisitConcreteElementA(this);
  }

  OperationA (){
    console.log('ConcreteElementA OperationA');  
  }
}

class ConcreteElementB extends Element {
  constructor() {
    super();
    console.log('ConcreteElementB created');
  }

  Accept (visitor){
    visitor.VisitConcreteElementB(this);
  }

  OperationB (){
    console.log('ConcreteElementB OperationB');  
  }
}


function init_Visitor() {
  let visitor1 = new ConcreteVisitor1();
  let visitor2 = new ConcreteVisitor2();
  let elementA = new ConcreteElementA();
  let elementB = new ConcreteElementB();
  elementA.Accept(visitor1);
  elementB.Accept(visitor2);
}
init_Visitor();