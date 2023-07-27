class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isTurnedOn = false;
    }
  
    turnOn() {
      this.isTurnedOn = true;
      console.log(`${this.name} включен(а) в розетку.`);
    }
  
    turnOff() {
      this.isTurnedOn = false;
      console.log(`${this.name} выключен(а) из розетки.`);
    }
  }
  
  class TableLamp extends ElectricalAppliance {
    constructor(name, power, bulbType) {
      super(name, power);
      this.bulbType = bulbType;
    }
  
    changeBulb(newBulbType) {
      this.bulbType = newBulbType;
      console.log(`${this.name} теперь использует лампочку типа ${this.bulbType}.`);
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;
    }
  
    shutdown() {
      console.log(`${this.brand} компьютер выключается...`);
    }
  }
  
  // Создаем экземпляры приборов
  const lamp = new TableLamp("Настольная лампа", 40, "LED");
  const computer = new Computer("Компьютер", 500, "Acer");
  
  // Включаем приборы в розетку
  lamp.turnOn();
  computer.turnOn();
  
  // Выполняем дополнительные действия, если такие есть (вызов методов у экземпляров)
  lamp.changeBulb("Incandescent");
  computer.shutdown();
  computer.turnOff();
  
  
  // Функция для подсчета общей потребляемой мощности
  function calculateTotalPower(...appliances) {
    let totalPower = 0;
    appliances.forEach((appliance) => {
      if (appliance.isTurnedOn) {
        totalPower += appliance.power;
      }
    });
    return totalPower;
  }
  
  // Выводим общую потребляемую мощность в консоль
  console.log(`Общая потребляемая мощность: ${calculateTotalPower(lamp, computer)} Вт`);
  