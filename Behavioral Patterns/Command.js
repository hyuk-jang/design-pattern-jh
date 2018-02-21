// 커맨드 패턴(Command Pattern)
//     - 요구 사항을 객체로 캡슐화 할 수 잇으며, 매개변수를 써서 여러 가지 다른 요구 사항을 집어넣을 수 있다.
//        또한 요청 내역을 큐에 저장하거나 로그로 기록할 수도 잇으며, 작업취소 기능도 지원 가능하다.
//     - 예: 리모콘
//     - 서블릿의 doGet(), doPost() 또는 스트럿츠의 Action() 메서드도 커맨드 패턴이지 않을까?

'use strict';

class Invoker {
  constructor() {
    console.log('Invoker created');

    this.commandList = [];
  }

  StoreCommand(command) {
    this.commandList.push(command);
  }

  UnstoreCommand(command){
    this.commandList.pop(command);
  }

  ExecuteList() {
    this.commandList.forEach(command => {
      command.Execute();
    });
  }
}

class Command {
  constructor() {
  }

  Execute() {
  }
}

class ConcreteCommand extends Command {
  constructor(receiver, state) {
    super();
    this.receiver = receiver;
    console.log('ConcreteCommand created');
  }
    
  Execute() {
    console.log('ConcreteCommand Execute');
    this.receiver.Action();
  }
}

class Receiver {
  constructor() {
    console.log('Receiver created');
  }

  Action() {
    console.log('Receiver Action');
  }
}


function init_Command() {
  var invoker = new Invoker();
  var receiver = new Receiver();
  var command = new ConcreteCommand(receiver);
  invoker.StoreCommand(command);
  invoker.commandList[0].Execute();
  invoker.StoreCommand(command);
  invoker.ExecuteList();
}
init_Command();