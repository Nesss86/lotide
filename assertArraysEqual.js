const assertArraysEqual = function (array1, array2){
  if (array1.length !== array2.length) {
    console.log("These Arrays Are Not Equal in Length");
    return;
  }
  for (let i = 0; i <array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("One or More Elements Don't Match");
      return;
    }
  }
  console.log("Both Arrays Match!");
};
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;