function printOwnProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ": " + obj[key]);
      }
    }
  }
  
  // Пример использования функции
  const exampleObj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  printOwnProperties(exampleObj);

  