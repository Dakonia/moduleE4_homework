function hasProperty(obj, propertyName) {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
  }
  
  // Пример использования функции
  const exampleObj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(hasProperty(exampleObj, "name")); // Выведет: true
  console.log(hasProperty(exampleObj, "gender")); // Выведет: false
  