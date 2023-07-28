function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnedOn = false;
  }
  
  ElectricalAppliance.prototype.turnOn = function () {
    this.isTurnedOn = true;
    console.log(`${this.name} включен(а) в розетку.`);
  };
  
  ElectricalAppliance.prototype.turnOff = function () {
    this.isTurnedOn = false;
    console.log(`${this.name} выключен(а) из розетки.`);
  };
  
  function TableLamp(name, power, bulbType) {
    ElectricalAppliance.call(this, name, power);
    this.bulbType = bulbType;
  }
  
  TableLamp.prototype = Object.create(ElectricalAppliance.prototype);
  TableLamp.prototype.constructor = TableLamp;
  
  TableLamp.prototype.changeBulb = function (newBulbType) {
    this.bulbType = newBulbType;
    console.log(`${this.name} теперь использует лампочку типа ${this.bulbType}.`);
  };
  
  function Computer(name, power, brand) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
  }
  
  Computer.prototype = Object.create(ElectricalAppliance.prototype);
  Computer.prototype.constructor = Computer;
  
  Computer.prototype.shutdown = function () {
    console.log(`${this.brand} компьютер выключается...`);
  };
  
  // Создаем экземпляры приборов
  const lamp = new TableLamp("Настольная лампа", 40, "LED");
  const computer = new Computer("Компьютер", 500, "Acer");
  
  // Включаем приборы в розетку
  lamp.turnOn();
  computer.turnOn();
  
  // Выполняем дополнительные действия, если такие есть (вызов методов у экземпляров)
  lamp.changeBulb("Incandescent");
  computer.shutdown();
  
  // Включаем второй прибор
  computer.turnOn();
  
  // Выключаем приборы из розетки
  lamp.turnOff();
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
  