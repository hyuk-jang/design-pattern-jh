// adapter 패턴
// adapter의 의미는 '접속 소켓', '확장 카드', '(물건을 다른 것에) 맞추어 붙이다', '맞추다'이다. [그림 5-35]처럼 전원에서 나오는 전기는 대개 교류 200V이지만 노트북은 직류 12V이다. 그러나 우리는 노트북을 사용할 때 아무런 불편 없이 노트북 선을 전원에 그대로 꽃아 사용한다. 이는 중간에 교류 200V를 직류 12V로 바꾸어 주는 무엇인가가 존재하기 때문이다. 이것이 노트북 선 중간에 붙어 있는 어댑터이다.

// 프로그램을 작성하다보면 기존에 만들어놓은 클래스와 유사한 경우가 있다. 하지만 그 클래스를 재사용하고 싶어도 조금이라도 수정하지 않고 사용하기란 어려울 것이다. adapter 패턴은 기존 클래스를 재사용할 수 있도록 중간에서 맞춰주는 역할을 한다. 즉 호환성이 없는 기존 클래스의 인터페이스를 변환해 재사용할 수 있도록 해준다. adapter 패턴은 다음 두 가지 형태로 사용된다.

// • 클래스 adapter 패턴 : 상속을 이용한 어댑터 패턴
// • 인스턴스 adapter 패턴 : 위임을 이용한 어댑터 패턴


'use strict';

class Target {
  constructor(type) {
    let result;

    switch(type) {
    case 'adapter':
      result = new Adapter();
      break;
    case 'second':
      result = new Sdapter();
      break;
    default:
      result = null;
    }
    return result;
  }

  Request() {
  }
}


class Adaptee {
  constructor() {
    console.log('Adaptee created');
  }

  SpecificRequest () {
    console.log('Adaptee request');
  }
}


class Adapter extends Adaptee {

  constructor() {
    super();
    console.log('Adapter created');
  }

  Request (){
    return this.SpecificRequest();
  }
}

class Sdapter extends Adaptee {

  constructor() {
    super();
    console.log('Adapter created');
  }

  Respond (){
    return this.SpecificRequest();
  }
}


function init_Adapter() {
  var f = new Target('second');
  console.dir(f);
  f.Request();
}
init_Adapter();