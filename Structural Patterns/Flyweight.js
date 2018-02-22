// flyweight는 '(권투·레슬링 등의) 플라이급 선수(보통 체중 48~51kg 사이)'를 말한다. 즉 가벼운 것이다. 그렇다면 패턴에서 flyweight는 무엇이 가볍다는 것일까? 일반적으로 메모리 사용량을 말할 때 많이 사용하면 무겁다고 하고, 적게 사용하면 가볍다고 한다. 따라서 flyweight 패턴은 메모리를 가볍게 해준다고 짐작할 수 있다. 자바에서 인스턴스를 생성할 때는 new를 사용한다.

// 인스턴스를 많이 생성한다면 new가 많아지고 이는 메모리 사용량이 많아짐을 의미한다. flyweight 패턴은 메모리 사용량을 줄이기 위한 방법으로, 인스턴스를 필요한 대로 다 만들어 쓰지 말고, 동일한 것은 가능하면 공유해서 객체 생성을 줄이자는 것이다.

// flyweight 패턴의 구조를 [그림 5-41]에서 살펴보면 클래스별로 factory를 만들고(flyweightFactory), 그 factory(flyweightFactory)에서는 자신이 생성한 객체들을 관리한다. 만일 클라이언트가 요청한 객체를 factory가 가지고 있으면(concreteFlyweight) 그것을 넘겨주면 된다. 그런데 요청한 객체가 factory에 없으면(unsharedConcreteFlyweight) 새로 객체를 만들어 저장해놓고 그것을 넘겨준다.

'use strict';

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
    console.log('FlyweightFactory created');
  }

  GetFlyweight (key){
    if(this.flyweights[key]){
      return this.flyweights[key];
    }
    else{
      this.flyweights[key] = new ConcreteFlyweight(key);
      return this.flyweights[key];
    }
  }

  CreateGibberish (keys) {
    return new UnsharedConcreteFlyweight(keys, this);
  }
}

class Flyweight {
  constructor() {
  }

  Operation (extrinsicState){
  }
}


class ConcreteFlyweight extends Flyweight {
  constructor(key) {
    super();
    this.intrinsicState = key;
    console.log('ConcreteFlyweight created');
  }

  Operation (extrinsicState){
    return extrinsicState + this.intrinsicState;
  }
}

class UnsharedConcreteFlyweight extends Flyweight {
  constructor(keys, flyweights) {
    super();
    this.flyweights = flyweights;
    this.keys = keys;
    console.log('UnsharedConcreteFlyweight created');
  }

  Operation (extrinsicState){
    var key, word = '';

    for(var i = 0; i < extrinsicState; i++) {
      //random key
      key = this.keys[Math.floor(Math.random() * (this.keys.length))];
      console.log('key', key);
      word = this.flyweights.GetFlyweight(key).Operation(word);
    }
    console.log('UnsharedConcreteFlyweight Operation: ');
    console.log(word);
  }
}

function init_Flyweight() {
  var flyweights = new FlyweightFactory();
  var gibberish = flyweights.CreateGibberish(['고양이', '사자', '여우']);
  console.dir(gibberish);
  gibberish.Operation(5);
  console.dir(gibberish);
  // gibberish.Operation(10);
}
init_Flyweight();