

class AbstFactory {
  constructor() {

  }

  create() {
    this.step_1()
    const product = this.step_2()
    this.step_3()  
    return product
  }

  step_1(){}
  step_2(){}
  step_3(){}

}

class PepsiFactory extends AbstFactory {
  constructor(){
    super()
  }

  step_1(){}
  step_2(){
    const product = new ConcreteProduct()
    product.setName('펩시')
    return product
  }
  step_3(){}


}

class ColaFactory extends AbstFactory {
  constructor(){
    super()
  }
  step_1(){}
  step_2(){
    const product = new ConcreteProduct()
    product.setName('콜라')
    return product
  }
  step_3(){}
}

class InterProduct {
  constructor() {
  }

  eat() {}
}
class ConcreteProduct {
  constructor() {
    this.name 
  }

  setName(name){
    this.name = name
  }

  eat() {
    console.log(`${this.name} 을 먹다`)
  }
}

function execute() {
  let pepsi_1 = new PepsiFactory();
  let product_1 = pepsi_1.create()
  product_1.eat()

  
  let colaFac = new ColaFactory();
  let cola = colaFac.create()
  cola.eat()
}

execute()