// Prototype class
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.price = price;
    this.model = model;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
  }
}

// Produce base auto
const prototypeCar = new TeslaCar('S', 8000, 'black', false);

// Cloning of base auto
const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

// Changes for particular auto
car1.interior = 'white';
car1.autopilot = true;
