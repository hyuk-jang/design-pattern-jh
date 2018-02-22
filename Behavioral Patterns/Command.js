// 커맨드 패턴(Command Pattern)
// command의 의미는 '명령어'이다. 문서편집기의 복사(copy), 붙여넣기(paste), 잘라내기(cut) 등도 모두 명령어이다. 그런데 이런 명령어를 각각 구현하는 것보다는 [그림 5-52]처럼 하나의 추상 클래스에 execute() 메서드를 하나 만들고 각 명령이 들어오면 그에 맞는 서브 클래스(copy_command)가 선택되어 실행하는 것이 효율적이다. 이는 함수 오버로딩(overloading)과 같은 추상화 개념을 사용한 것이다.

// 그러나 command 패턴은 단순히 명령어를 추상 클래스(abstract class)와 구체 클래스(copy_command, cut_command, paste_command)로 분리하여 단순화한 것으로 끝나지 않고, 명령어에 따른 취소(undo) 기능까지도 포함한다(사용자 입장에서는 해당 명령어를 실행했다가 취소(undo)하기도 하기 때문이다). 이렇게 프로그램의 명령어를 구현할 때는 command 패턴을 활용할 수 있다.



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