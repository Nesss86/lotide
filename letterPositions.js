const letterPositions = function (sentence) {
  const results = {};
  
  for (let i = 0;  i < sentence.length; i++) {
    const letter = sentence[i];

    if(letter !== ' ') {
      if(results[letter]) {
        results[letter].push(i)
      } else {
        results[letter] = [i];
      }  
    }
  }

  return results;
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

const assertArraysEqual = function (array1, array2){
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositionsResult = letterPositions("hello");

const expectedResult = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};


console.log(assertArraysEqual(letterPositionsResult["h"], expectedResult["h"])); // true
console.log(assertArraysEqual(letterPositionsResult["e"], expectedResult["e"])); // true
console.log(assertArraysEqual(letterPositionsResult["l"], expectedResult["l"])); // true
console.log(assertArraysEqual(letterPositionsResult["o"], expectedResult["o"])); // true


console.log(letterPositionsResult);

module.exports = letterPositions;