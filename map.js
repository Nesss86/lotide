const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); 
  }
  return results; 
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); 


const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]); 


const results3 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); 

module.exports = map;


