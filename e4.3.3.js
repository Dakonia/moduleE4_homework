function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
  }
  
  // Пример использования функции
  const emptyObj = createEmptyObjectWithoutPrototype();
  
  // Проверим, что объект не имеет прототипа (выведет: true)
  console.log(Object.getPrototypeOf(emptyObj) === null);
  