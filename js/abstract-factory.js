// Abstract factory
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory: familyCarFactory
}

// Factories
function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return 'Z4 is a Sport car!'
  }
}

class I3 {
  info() {
    return 'i3 is a Family car'
  }
}

// Initializing Abstract factory of sport cars,
// this factory return sportCarFactory => new Z4()
const factory = bmwProducer('sport');

// Car producing (Factory)
const myCar = factory();

console.log(myCar.info())
