

let instance

class Cooker {
  constructor() {
    if(instance === undefined){
      instance = this;
      // TODO
    } else {
      return instance
    }

    this.a = 0;

  }

  static getInstance() {
    if(instance){
      return instance
    } else {
      instance = new this();
      return instance
    }
  }

  up() {
    this.a += 1;
  }
}

let cooker = Cooker.getInstance()
cooker.a = 5;
console.log(cooker.a)
const cooker_1 = Cooker.getInstance();
cooker_1.a = 2;
cooker_1.up()
const cooker_2 = new Cooker();

console.log(cooker_1.a)
console.log(cooker_2.a)

console.log(cooker_1 === cooker_2)