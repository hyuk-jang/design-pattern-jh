// 퍼사드 패턴(Facade Pattern)
// facade는 '건물의 앞쪽 정면(전면)'이란 뜻이다. facade 패턴은 [그림 5-40]에서 적용 전과 후를 비교해보면 어떤 의미인지 짐작할 수 있을 것이다. 몇 개의 클라이언트 클래스와 서브시스템의 클라이언트 사이에 facade라는 객체를 세워놓음으로써 복잡한 관계를 정리(구조화)한 것이다.

// 즉 모든 관계가 전면에 세워진 facade 객체를 통해서만 이루어질 수 있게 단순한 인터페이스를 제공(단순한 창구 역할)하는 것이다. facade 패턴을 이용하면 서브시스템 내부에서 작동하고 있는 많은 클래스들의 관계나 사용법을 의식하지 않고 facade에서 제공하는 단순화된 하나의 인터페이스만 사용하므로, 클래스 간의 의존 관계가 줄어들고 복잡성 또한 낮아지는 효과를 볼 수 있다
    
//     - 각 패턴별 차이점:
//        데코레이터 패턴 : 인터페이스는 바꾸지 않고 책임(기능)만 추가
//        어댑터 패턴 : 한 인터페이스를 다른 인터페이스로 변환
//        퍼사드 패턴 : 인터페이스를 간단하게 바꿈
'use strict';

class Facade {
  constructor () {
    this.log('Facade class created');
    this.htmlid = null;
  }

  log (text) {
    if(typeof this.htmlid === null){
      console.log(text);
    }
    else{
      $('#'+this.htmlid).append(text+'</br>');
    }
  }

  erase () {
    $('#'+this.htmlid).html('');
  }

  test_dp (dp) {
    switch(dp){
    case 'Facade':
      this.htmlid = 'test_Facade';
      this.erase();
      this.log('This is the Facade');
      break;
    case 'AbstractFactory': 
      this.htmlid = 'test_AbstractFactory';
      this.erase();
      init_AbstractFactory();
      break;
    case 'Builder':
      this.htmlid = 'test_Builder';
      this.erase();
      init_Builder();
      break;
    case 'Factory':
      this.htmlid = 'test_Factory';
      this.erase();
      init_FactoryMethod();
      break;
    case 'Prototype':
      this.htmlid = 'test_Prototype';
      this.erase();
      init_Prototype();
      break;
    case 'Singleton':
      this.htmlid = 'test_Singleton';
      this.erase();
      init_Singleton();
      break;
    case 'Adapter':
      this.htmlid = 'test_Adapter';
      this.erase();
      init_Adapter();
      break;
    case 'Bridge':
      this.htmlid = 'test_Bridge';
      this.erase();
      init_Bridge();
      break;
    case 'Composite':
      this.htmlid = 'test_Composite';
      this.erase();
      init_Composite();
      break;
    case 'Decorator':
      this.htmlid = 'test_Decorator';
      this.erase();
      init_Decorator();
      break;
    case 'Flyweight':
      this.htmlid = 'test_Flyweight';
      this.erase();
      init_Flyweight();
      break;
    case 'Proxy':
      this.htmlid = 'test_Proxy';
      this.erase();
      init_Proxy();
      break;
    case 'ChainofResponsibility':
      this.htmlid = 'test_ChainofResponsibility';
      this.erase();
      init_ChainofResponsibility();
      break;
    case 'Command':
      this.htmlid = 'test_Command';
      this.erase();
      init_Command();
      break;
    case 'Interpreter':
      this.htmlid = 'test_Interpreter';
      this.erase();
      init_Interpreter();
      break;
    case 'Iterator':
      this.htmlid = 'test_Iterator';
      this.erase();
      init_Iterator();
      break;
    case 'Mediator':
      this.htmlid = 'test_Mediator';
      this.erase();
      init_Mediator();
      break;
    case 'Memento':
      this.htmlid = 'test_Memento';
      this.erase();
      init_Memento();
      break;
    case 'Observer':
      this.htmlid = 'test_Observer';
      this.erase();
      init_Observer();
      break;
    case 'State':
      this.htmlid = 'test_State';
      this.erase();
      init_State();
      break;
    case 'Strategy':
      this.htmlid = 'test_Strategy';
      this.erase();
      init_Strategy();
      break;
    case 'TemplateMethod':
      this.htmlid = 'test_TemplateMethod';
      this.erase();
      init_TemplateMethod();
      break;
    case 'Visitor':
      this.htmlid = 'test_Visitor';
      this.erase();
      init_Visitor();
      break;
    default:
      console.log('nothing to test');
    }
  }
}
