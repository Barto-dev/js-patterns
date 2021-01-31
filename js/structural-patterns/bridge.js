class Model {
  constructor(color) {
    this.color = color;
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`
  }
}

class Bmv extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type
  }
}

class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilverColor extends Color {
  constructor() {
    super('silver-metallic');
  }
}

const blackBmw = new Bmv(new SilverColor());
console.log(blackBmw.paint())
