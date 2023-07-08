function store_car_info(manufacturer: string, modelName: string, ...options: any): object {
    const carInfo: any = {
      Manufacturer: manufacturer,
      Model: modelName,
    };
  
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  const car = store_car_info("Toyota", "Camry", "Color", "Red", "Year", 2022, "Sunroof", true);
  
  console.log(car);
  