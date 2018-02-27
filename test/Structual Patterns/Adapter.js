

class AbstStrategy {
  constructor() {

  }
  cook(){}
}

class ChinaStrategy extends AbstStrategy {
  constructor() {
    super()
  }

  cook() {
    console.log('중화 요리 시작')
  }

}
class KoreaStrategy extends AbstStrategy {
  constructor() {
    super()
  }

  cook() {
    console.log('한식 요리 시작')
  }

}
class JapanStrategy extends AbstStrategy {
  constructor() {
    super()
  }

  cook() {
    console.log('일식 요리 시작')
  }
}

class SpaceAdatee{
  constructor() {}

  static make() {
    console.log('우주 요리 시작')
  }
}

class SpaceAdapterImpl extends AbstStrategy {
  constructor() {
    super()
  }

  cook() {
    SpaceAdatee.make();
  }

}




class Context {
  constructor(cookName) {
    this.strategy
    switch (cookName) {
      case '한식':
        this.strategy = new KoreaStrategy();
        break;
      case '일식':
        this.strategy = new JapanStrategy();
        break;
      case '중식':
        this.strategy = new ChinaStrategy();
        break;
      case '우주식':
        this.strategy = new SpaceAdapterImpl();
        break;
      default:
        break;
    }
  }

  cook() {
    this.strategy.cook();
  }
}

function execute(name) {
  const c1 = new Context(name)
  c1.cook();

}

execute('한식');
execute('일식');
execute('우주식');