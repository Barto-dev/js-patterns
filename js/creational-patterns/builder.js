class Car {
  constructor() {
    this.autoPilot = false;
    this.parctronic = false;
    this.signaling = false;
  }
}

/**
 *  In each method we return this so as not to lose the context and it
 *  was possible to add different options in a chain. If we need a standard object,
 *  we just create a new instance, if we need to change or add something, we add
 *  methods as shown below
 */
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParctronic(parctronic) {
    this.car.parctronic = parctronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParctronic(true)
  .updateEngine('V8')
  .build()

console.log(myCar)
