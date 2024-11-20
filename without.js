const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

const assertArraysEqual = function (array1, array2){
  if (array1.length !== array2.length) {
    console.log("These Arrays Are Not Equal in Length");
    return;
  }
  for (let i = 0; i <array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`One or More Elements Don't Match at index ${i}: ${array1[i]} !== ${array2[i]}`);
      return;
    }
  }
  console.log("Both Arrays Match!");
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2){
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i <array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};
const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;