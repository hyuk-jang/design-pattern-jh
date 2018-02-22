// 이터레이터 패턴(Iterator Pattern)
// iterate는 '반복하다'라는 뜻이고, iterator은 '반복자'라는 뜻이다. 즉 무엇인가 반복할 때 iterator 객체를 사용한다. iterator 객체는 반복하는 데 필요한 첫 번째 요소를 가리키는 메서드, 다음 요소를 가리키는 메서드, 마지막 요소를 가리키는 메서드, 현재 포인터가 가리키고 있는 요소를 반환하는 메서드 등을 포함한다.

// iterator 패턴은 반복이 필요한 자료구조를 모두 동일한 인터페이스를 통해 접근할 수 있도록 [그림 5-43]처럼 iterator 객체 속에 넣은 다음, iterator 객체의 메서드를 이용해 자료구조를 활용할 수 있도록 해준다

// iterator 패턴은 바로 값을 1씩 증가시키는 변수 i의 역할을 한다. 즉 변수 i의 역할을 추상화해서 일반화한 것이 iterator 패턴이다. 따라서 iterator 패턴은 배열 등에서 원소를 순서대로 조작하면서 전체를 검색하는 역할을 담당한다.

// [그림 5-44]에서 aggregate 인터페이스는 요소들이 나열되어 있는 집합체로서 iterator 메서드를 가지고 있고, 이 메서드는 집합체에 대응하는 iterator를 1개 작성한다. 또 이것을 사용해서 iterator 인터페이스를 실제로 구현한 클래스의 인스턴스(concreteIterator 클래스)를 1개 만들어 집합체를 하나씩 나열하고, 검색하고, 조사하게 된다. 또 concreteAggregate 클래스는 aggregate 역할이 정한 인터페이스를 실제로 구현한다.


'use strict';

class Iterator {
  constructor() {
  }

  First (){
  }

  Next (){
  }

  IsDone (){
  }

  CurrentItem (){
  }
}

class ConcreteIterator extends Iterator {
  constructor(aggregate) {
    super();
    console.log('ConcreteIterator created');
    this.index = 0;
    this.aggregate = aggregate;
  }

  First (){
    return this.aggregate.list[0];
  }

  Next (){
    this.index += 2;
    return this.aggregate.list[this.index];
  }

  CurrentItem (){
    return this.aggregate.list[this.index];
  }
}

class Aggregate {
  constructor() {
  }

  CreateIterator (){
  }
}

class ConcreteAggregate extends Aggregate {
  constructor(list) {
    super();
    this.list = list;
    console.log('ConcreteAggregate created');
  }

  CreateIterator (){
    this.iterator = new ConcreteIterator(this);
  }
}

function init_Iterator() {
  var aggregate = new ConcreteAggregate([0,1,2,3,4,5,6,7]);
  aggregate.CreateIterator();
  console.log(aggregate.iterator.First());
  console.log(aggregate.iterator.Next());
  console.log(aggregate.iterator.CurrentItem());
}
init_Iterator();