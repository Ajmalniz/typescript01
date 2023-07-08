function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
    console.log("Bread\n");
  }
  
  make_sandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
  make_sandwich("Ham", "Mustard");
  make_sandwich("Turkey", "Cucumber", "Onion", "Mayonnaise", "Salt", "Pepper");
  