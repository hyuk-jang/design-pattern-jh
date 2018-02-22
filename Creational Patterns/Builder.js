// builder 패턴
// 복잡한 것을 만들 때는 전체를 한꺼번에 만들기보다는 작게 분리하여 만든 후 다시 합치는 것이 편리하다. builder 패턴은 복잡한 인스턴스를 조립하여 만드는 구조로, 복합 객체를 생성할 때 객체를 생성하는 방법(과정)과 객체를 구현(표현)하는 방법을 분리한다. 따라서 이 패턴은 동일한 생성 절차에서 서로 다른 표현 결과를 만들 수 있다.

// 그림과 같이 구체적인 여러 개의 concreteBuilder들을 추상화하여 builder 추상 클래스를 만들고, 추상 클래스는 구체 클래스의 메서드를 결정한다. director 클래스는 construct 메서드를 하나 가지고 있고, 그 메서드를 사용해서 어떤 구체 클래스가 선택되는지 결정한다.

'use strict';

class Director {
  constructor() {
    this.structure = ['Maze','Wall','Door'];
    console.log('Director class created');
  }

  Construct (){
    for(var all in this.structure){
      let builder = new ConcreteBuilder();
      builder.BuildPart(this.structure[all]);
      builder.GetResult();
    }
  }
}

class Builder {
  constructor() {
  }

  BuildPart (){
  }
}

class ConcreteBuilder extends Builder {
  constructor() {
    super();
    console.log('ConcreteBuilder class created');
  }

  BuildPart (rawmaterial){
    console.log('ConcreteBuilder BuildPart()');
    var material = rawmaterial;
    this.product = new Product(material);
  }

  GetResult (){
    console.log(JSON.stringify(this.product));
    return this.product;
  }
}

class Product {
  constructor(material) {
    console.log('Product class created');
    this.data = material;
  }
}

function init_Builder() {
  let director = new Director();
  director.Construct();
}

init_Builder();







class Parent{
  constructor(){
    this.a = 1;
  }

  cry(){
    console.log(this.a);
  }
}

class Child extends Parent {
  constructor(){
    super();
    this.a = 2;
  }
}

let child = new Child();
child.cry();