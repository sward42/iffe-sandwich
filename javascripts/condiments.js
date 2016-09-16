var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {
  	mayo: 1.5,
  	mustard: 1,
  	basil: 2,
  	spicy: 1.2,
  	none: 0
  };

  var condimentsSelectionPrice = 0;
  // Augment the original object with another method
  maker.addCondiments = function(selection) {
  	if (selection in condimentsPrices) {
  		condimentsSelectionPrice = parseFloat(condimentsPrices[selection]);
  	}
  };

  maker.getCondimentsPrice = function() {
  	return condimentsSelectionPrice;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});