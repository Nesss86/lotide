// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};


assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // Arrays should match
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // Extra key in second object



