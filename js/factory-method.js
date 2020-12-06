/**
 * This pattern is well suited if we need to create a small number of objects with a
 * similar structure but different data, for a large number of objects this pattern is
 * not very good because the factory class will be bloated in the code
 */
class MercedesFactory {
  create(type) {
    switch (type) {
      case 's600':
        return new Mercedes(type, 108000, 300);
      case 'e220':
        return new Mercedes(type, 78000, 240);
    }
  }
}

class Mercedes {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

const factory = new MercedesFactory();
const s600 = factory.create('s600');
const e220 = factory.create('e220');
