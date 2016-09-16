var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	white: 1,
  	wheat: 1,
  	rye: 2,
  	ciabatta: 1.5,
  	none: 0
  };

  var breadSelectionPrice = 0;
  // Augment the original object with another method
  maker.addBread = function(selection) {
  	if (selection in breadPrices) {
  		breadSelectionPrice = parseFloat(breadPrices[selection]);
  	}
  };

  maker.getBreadPrice = function() {
  	return breadSelectionPrice;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});