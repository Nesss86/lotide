const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log("Both Arrays Match!");
  } else {
    console.log("One or More Elements Don't Match");
  }
};

module.exports = assertArraysEqual;