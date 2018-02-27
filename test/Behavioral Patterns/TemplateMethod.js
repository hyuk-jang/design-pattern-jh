

class AbstTemplate {
  constructor() {

  }
  // Action
  excuteEat() {
    let restaurant = this.choiceRestaurant()
    if(restaurant !== ''){
      this.moveRestaurant()
    } else {
      throw new Error('음식점 못 고름')
    }
    this.order()
    this.eat()
    this.checkPay()
    this.back()
  }

  // Step
  choiceRestaurant() { }
  moveRestaurant() { }
  order() { }
  eat() { }
  checkPay() { }
  back() { }
}

class ConcreteTemplate extends AbstTemplate {
  constructor() {
    super();
  }

  // Step
  choiceRestaurant() {
    console.log('choiceRestaurant')
    return '중국집'
  }
  moveRestaurant() { console.log('moveRestaurant') }
  order() { console.log('order') }
  eat() { console.log('eat') }
  checkPay() { console.log('checkPay') }
  back() { console.log('back') }

}


function execute() {
  const ct1 = new ConcreteTemplate()
  ct1.excuteEat()

}
execute();