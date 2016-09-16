// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	turkey: 1,
  	ham: 1,
  	beef: 2,
  	bacon: 1,
  	none: 0
  };

  var meatSelectionPrice = 0;
  // Augment the original object with another method
  maker.addMeat = function(selection) {
  	if (selection in meatPrices) {
  		meatSelectionPrice = parseFloat(meatPrices[selection]);
  	}
  };

  maker.getMeatPrice = function() {
  	return meatSelectionPrice;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
