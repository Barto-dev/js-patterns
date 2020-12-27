class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla'
  }
}

// Decorator, wraps an existing class and extends its functionality
class Parctronic {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parctronic`;
  }
}

class Autopilot {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

let tesla = new Tesla();
tesla = new Parctronic(tesla);
tesla = new Autopilot(tesla);

console.log(tesla.getPrice())
