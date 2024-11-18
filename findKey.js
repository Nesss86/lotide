const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
  
 
  const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASES
assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars : 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2},
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
),
"noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
    },
    (x) => x.stars === 5
  ),
  undefined
);

assertEqual(
  findKey({}, (x) => x.stars === 2),
  undefined
);

assertEqual(
  findKey(
    {
      a: { value: 5 },
      b: { value: 10 },
      c: { value: 5 },
    },
    (x) => x.value === 5
  ),
  "a"
);