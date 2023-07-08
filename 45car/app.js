function store_car_info(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        Manufacturer: manufacturer,
        Model: modelName,
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
var car = store_car_info("Toyota", "Camry", "Color", "Red", "Year", 2022, "Sunroof", true);
console.log(car);
