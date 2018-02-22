// 프록시 패턴(Proxy Pattern)
// proxy는 '대리인'이란 뜻이다. 즉 뭔가를 대신해서 처리하는 것이다. proxy 패턴에 대한 이해를 돕기 위해 예들 들어보겠다. 성능이 매우 떨어지는 PC를 사용하던 시절, 그림과 글이 함께 있는 문서를 화면에 띄우면 어떤 현상이 나타났는가? 그림은 용량이 크고, 일반 텍스트는 용량이 작다. 그래서 텍스트는 계속 나오지만, 그림은 아직 나오지 않는다. 사용자 입장에서는 텍스트를 먼저 읽으며 내용을 파악하고 나중에 그림이 나올 때 그림을 보면 된다.

// 그런데 이렇게 처리가 안 되고 그림과 텍스트가 전부 읽혀진 뒤에야 화면에 나온다면 사용자는 상당히 오랫동안(그림이 다 로딩될 때까지) 기다리고 있어야 한다. 사용자 입장에서는 텍스트라도 먼저 나오는 게 좋다. 이렇게 하려면 텍스트 처리용 프로세스, 그림 처리용 프로세스를 별도로 두고 운영하면 된다. 이런 구조를 갖게 설계하는 것이 proxy 패턴이다.

// [그림 5-42]에서 client가 realSubject 클래스를 사용하려고 할 때 subject 인터페이스를 통해서 요청하게 되고 어떤 객체를 통해서 동작하는지는 알 수 없다. proxy 클래스는 realSubject 객체를 참조하고 있으며 client 요청에 적절한 행동(예, 그림 처리)을 취한다. realSubject는 실제로 동작하는 클래스이다.
    
'use strict';

class Subject {
  constructor() {
  }

  Request (){
  }
}

class RealSubject extends Subject {
  constructor() {
    super();
    console.log('RealSubject created');
  }

  Request (){
    console.log('RealSubject handles request');
  }
}

class Proxy extends Subject {
  constructor() {
    super();
    console.log('Proxy created');
  }

  Request (){
    this.realSubject = new RealSubject();
    this.realSubject.Request();
  }
}

function init_Proxy() {
  var proxy = new Proxy();
  console.log('proxy', proxy);
  proxy.Request();
}
init_Proxy();