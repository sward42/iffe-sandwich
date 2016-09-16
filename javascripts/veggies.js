var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	tomato: 1.5,
  	lettuce: 1,
  	peppers: 2,
  	onion: 1.2,
  	none: 0
  };

  var veggieSelectionPrice = 0;
  // Augment the original object with another method
  maker.addVeggie = function(selection) {
  	if (selection in veggiePrices) {
  		veggieSelectionPrice = parseFloat(veggiePrices[selection]);
  	}
  };

  maker.getVeggiePrice = function() {
  	return veggieSelectionPrice;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});