// 프록시 패턴(Proxy Pattern)
//     - 어떤 객체에 대한 접근을 제어하기 위한 용도로 대리인이나 대변인에 해당하는 객체를 제공하는 패턴
//     - 다른 객체를 대변한느 객체를 만들어서 주 객체에 대한 접근을 제어할 수 있다.
//     - 원격프록시(remote proxy): 원격 객체에 대한 접근 제어
//                                                 클라이언트와 원격 객체 사이에서 데이터 전달을 관리
//        가상프록시(virtual proxy): 생성하기 힘든(인스턴스를 만드는 데 많은 비용이 드는) 자원에 대한 접근 제어
//        보호프록시(protection proxy): 접근 권한이 필요한 자원에 대한 접근 제어
//                                                      호출하는 쪽의 권한에 따라서 객체에 있는 메소드에 대한 접근 제어
//        방화벽 프록시: 일련의 네트워크 자원에 대한 접근 제어
//        스마트 레퍼런스 프록시: 주 객체가 참조될 때마나 추가 행동을 제공. 객체에 대한 레퍼런스 개수를 세는 등
//        캐싱 프록시: 비용이 많이 드는 작업의 결과를 임시로 저장
//                           웹 서버 프록시 또는 컨텐츠 관리 및 퍼블리싱 시스템 등에서 사용
//        동기화 프록시: 여러 스레드에서 주 객체에 접근하는 경우 안전하게 작업을 처리할 목적(분산 환경 등에서 사용)
//        복잡도 숨김 프록시: 복잡한 클래스들의 집합에 대한 접근을 제어하고 복잡도를 숨겨줌
//                                      퍼사드 프록시라고도 함.
//                                      프록시에서는 접근을 제어하지만 퍼사드 패턴에서는 대체 인터페이스만 제공
//        지연 복사 프록시: 클라이언트에서 필요로 할 때까지 객체가 복사되는 것을 지연시킴으로써 객체의 복사 제어
       
//     - 아래 객체들은 모두 클라이언트와 객체 사이에 끼여들어서 요청을 전달한다.
//          데코레이터 패턴: 클래스에 새로운 행동을 추가하기 위한 용도
//          어댑터 패턴: 다른 객체의 인터페이스를 바꿔주기 위한 용도
//          프록시 패턴: 어떤 클래스에 대한 접근을 제어하기 위한 용도
//     - java.reflect.Proxy 에 기능이 내장되어 있다.
    
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
  proxy.Request();
}
init_Proxy();