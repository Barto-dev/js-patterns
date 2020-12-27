// Адаптер это структурный паттерн который оборачивает объект с уникальным
// или специфическим внутренним устройством и подгоняет его под использование
// в уже стандартизированной системе классов. Адаптирует его специфические свойства и методы
// под уже использующиеся, что позволяет объектам с несовместимыми интерфейсами работать вместе
// пример ниже EngineV8 адаптируем под класс Auto

class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0');
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface()
  }
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());
myCar2.startEngine(engineAdapter)
