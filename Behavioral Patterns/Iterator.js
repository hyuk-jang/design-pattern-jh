// 이터레이터 패턴(Iterator Pattern)
// - 컬렉션 구현 방법을 노출시키지 않으면서도
//    그 잡합체 안에 들어있는 모든 항목에 접근할 수 있게 해주는 방법을 제공한다.
// - 컬렉션의 구현을 드러내지 않으면서 컬렉셔네 있는 모든 객체들에 대해 반복작업할 수 있다.

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