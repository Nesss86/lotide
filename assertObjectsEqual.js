const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for(let key of keys1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
        } 
      } else if(object1[key] !== object2[key]) {
        return false;
   }
 }  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = { a: 1, b: 2 };
const object2 = { a: 1, b: 2 };
const object3 = { a: 1, b: 3 };

assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);

module.exports= assertObjectsEqual;

