// - 인터프리터 패턴 (Interpreter pattern)
// interpreter는 '통역자'란 뜻이다. 대부분의 프로그래밍 언어가 컴파일러(compiler)를 사용해 기계어로 번역하는 반면 일부는 인터프리터(interpreter) 방식으로 번역한다. 인터프리터 방식은 코드를 한 줄씩 해석하여 해당 작업을 바로 수행하는 방식으로 전체 코드를 해석하고 수행해간다.

// 일반적으로 언어를 해석할 때는 BNF(Backus Naur Form) 형태의 표현을 사용한다. 이것은 말단 표현(terminal expression)과 비말단 표현(non-terminal expression)의 구조를 갖는다. 그리고 하나의 문장은 BNF 구조에서 최상위 루트의 expression을 나타낸다. interpreter 패턴도 단어의 의미처럼 무언가를 번역하는 데 사용한다. 즉 간단한 언어의 문법을 정의하고 해석하는 데 사용한다. 주로 SQL 언어나 통신 프로토콜 같은 것을 개발할 때 문법 규칙을 클래스화한 구조를 갖는다.

// [그림 5-57]에서 interpreter 패턴은 BNF 구조에 맞게 expression을 클래스 다이어그램으로 나타냈다. 말단 표현과 비말단 표현을 나타내는 구체 클래스(terminalExpression, nonterminalExpression)의 공통점을 일반화하여 추상 클래스(abstractExpression)를 만들었다.




'use strict';

class Context {
  constructor(input) {
    this.input = input;
    this.index = 0;
    this.output = null;
  }

  Lookup(expr) {
    //return this.
  }
}

class AbstractExpression {
  constructor() {
  }

  Interpret (context){
  }
}

class TerminalExpression extends AbstractExpression {
  constructor(name) {
    super();
    this.name = name;
    console.log('TerminalExpression created');
  }

  Interpret (context){
  }
}

class NonterminalExpression extends AbstractExpression {
  constructor() {
    super();
    this.name = '+';
    console.log('NonterminalExpression created');
  }

  Interpret (context){

    return terminal1.Interpret() + terminal2;
  }
}

function init_Interpreter() {
  var context = new Context('A+B+A')
  console.log('Not implemented');
}
init_Interpreter();