// if we have an initialized this class,
// we return it, else we create instance
class Counter {
  constructor() {
    // typeof class in js === object, and if we have already created this class
    // in another module, we will get a reference to this class,
    // else return this class
    if (typeof  Counter.instance === 'object') {
      return Counter.instance
    }
    Counter.instance = this;
    this.count = 0;
    return this;
  }

  get countValue() {
    return this.count
  }

  increaseCount() {
    return this.count++
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();
myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()

console.log(myCount1.countValue)
console.log(myCount2.countValue)

