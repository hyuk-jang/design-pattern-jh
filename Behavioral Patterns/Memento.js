// - 메멘토 패턴 (memento pattern) 
// memento는 '(사람, 장소를 기억하기 위한) 기념품'이란 뜻이다. 여기서 주목할 단어는 기억이다. 프로그램 개발에서 기억과 연관 지을 수 있는 기능에는 무엇이 있을까? 문서편집기에서 자주 사용하는 undo(되돌리기) 기능(또는 단축키 )을 생각해보자. undo 기능은 과거로 되돌리는 것으로, 이것이 가능하려면 과거의 작업을 기억하고 있어야 한다. memento 패턴은 undo 기능을 개발할 때 쓸 수 있다. 즉 클래스 설계 관점에서 객체의 정보를 저장할 필요가 있을 때 적용할 수 있다.

// [그림 5-56]에서 originator는 자신의 현재 상태를 저장하고 싶을 때 createMemento 메서드를 사용하여 memento를 만든다. 또 이전의 memento 역할을 전달받으면 그 memento 역할을 만든 시점의 상태로 돌리는 처리를 실행한다. memento는 originator의 상태를 표현하는 클래스로 내부 정보를 정리한다. 그리고 createMemento는 현재 상태를 저장하는 메서드이다.



'use strict';

class Originator {
  constructor() {
    console.log('Originator created');
    this.state = 'a';
    console.log('State= ' + this.state);
  }

  SetMemento (Memento){
    this.state = Memento.GetState();
    console.log('State= ' + this.state);
  }

  CreateMemento (state){
    return new Memento(state);
  }
}

class Memento {
  constructor(state) {
    this.state = state;
    console.log('Memento created. State= ' + this.state);
  }

  GetState (){
    return this.state;
  }

  SetState (state){
    this.state = state;
  }
}

class Caretaker {
  constructor() {
    console.log('Caretaker created');
    this.mementos = [];
  }

  AddMemento(memento) {
    console.log('Caretaker AddMemento');
    this.mementos.push(memento);
  }

  SetMemento() {
    return this.mementos[this.mementos.length-1];
  }
}

function init_Memento() {
  let caretaker = new Caretaker();
  let originator = new Originator();
  caretaker.AddMemento(originator.CreateMemento('b'));
  originator.SetMemento(caretaker.SetMemento());
  console.log(originator.state);
}
init_Memento();