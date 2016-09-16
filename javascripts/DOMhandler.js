// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var veggieChooser = document.getElementById("veggie");
var condimentChooser = document.getElementById("condiments");
var orderOutput = document.getElementById("yourSandwich");
var orderTotal = document.getElementById("totalPrice");

orderOutput.innerHTML = " Your sandwich order is:" + "<br>";

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addBread(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getBreadPrice());
  orderOutput.innerHTML += selectedTopping + " " + SandwichMaker.getBreadPrice() + "<br>";

});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addMeat(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getMeatPrice());
  orderOutput.innerHTML += selectedTopping + " " + SandwichMaker.getMeatPrice() + "<br>";

});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addCheese(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getCheesePrice());
  orderOutput.innerHTML += selectedTopping + " " + SandwichMaker.getCheesePrice() + "<br>";

});

veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addVeggie(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getVeggiePrice());
  orderOutput.innerHTML += selectedTopping + " " + SandwichMaker.getVeggiePrice() + "<br>";

});

condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addCondiments(selectedTopping);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getCondimentsPrice());
  orderOutput.innerHTML += selectedTopping + " " + SandwichMaker.getCondimentsPrice() + "<br>";

});

var btn = document.getElementById("checkout");
btn.addEventListener("click", function(event){
	event.preventDefault();

finalSandwichPrice = SandwichMaker.getTotalPrice();
  	orderTotal.value += finalSandwichPrice;

});




