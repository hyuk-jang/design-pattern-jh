// 컴포지트 패턴(Composite Pattern)
//     - 객체들을 트리 구조로 구성하여 부분과 전체를 나타내는 계층구조로 만들 수 있다.
//        이 패턴을 이용하면 클라이언트에서 개별 객체와 다른 객체들로 구성된
//        복합 객체(composite)를 똑같은 방법으로 다룰 수 있다.
//     - 클라이언트에서 객체 컬렉션과 개별 객체를 똑같은 식으로 처리할 수 있다.
//     - 예) 트리 구조의 패턴, 디렉토리 구조
//     - 예) XMLObject 객체가 컴포지트 패턴을 구현한 게 아닐까

'use strict';

class Component {
  constructor() {
  }

  Operation (){
  }

  Add (Component){
  }

  Remove (Component){
  }

  GetChild (key){
  }
}

class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
    console.log('Leaf created');
  }

  Operation (){
    console.log(this.name);
  }
}

class Composite extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
    console.log('Composite created');
  }

  Operation (){
    console.log('Composite Operation for: ' + this.name);
    for(var i in this.children)
      this.children[i].Operation();
  }

  Add (Component){
    this.children.push(Component);
  }

  Remove (Component){
    for(var i in this.children)
      if(this.children[i] === Component)
        this.children.splice(i, 1);
  }

  /**
   * 
   * @param {number} key 
   * @return {Composite}
   */
  GetChild (key){
    return this.children[key];
  }
}

function init_Composite() {
  var composite1 = new Composite('C1');
  composite1.Add(new Leaf('L1'));
  composite1.Add(new Leaf('L2'));
  var composite2 = new Composite('C2');
  console.log('@@@@', composite1);
  composite2.Add(composite1);
  composite1.GetChild(1).Operation();
  console.log('@@@@', composite2);
  composite2.Remove(composite1)
  composite2.Operation();
}
init_Composite();