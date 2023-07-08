function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("Bread\n");
}
make_sandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
make_sandwich("Ham", "Mustard");
make_sandwich("Turkey", "Cucumber", "Onion", "Mayonnaise", "Salt", "Pepper");
