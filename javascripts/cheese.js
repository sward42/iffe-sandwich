var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	cheddar: 1.5,
  	swiss: 1,
  	gorgonzola: 2,
  	mozzarella: 1.2,
  	none: 0
  };

  var cheeseSelectionPrice = 0;
  // Augment the original object with another method
  maker.addCheese = function(selection) {
  	if (selection in cheesePrices) {
  		cheeseSelectionPrice = parseFloat(cheesePrices[selection]);
  	}
  };

  maker.getCheesePrice = function() {
  	return cheeseSelectionPrice;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});