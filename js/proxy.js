// Proxy is the layer between requests and original objects


class CarAccess {
  open() {
    console.log('Opening car door');
  }

  close() {
    console.log('Close car door')
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open()
    } else {
      console.log('Access denied!')
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close()
  }
}

const door = new SecuritySystem(new CarAccess());
door.open('Jack');
door.open('Ilon');
