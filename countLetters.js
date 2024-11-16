const countLetters = function (sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence [i];

    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
   }
  }
 } 
  return results;
};

const assertEqual = function(actual, expected) {
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);
  if (actualString === expectedString) {
    console.log(`✅✅✅Assertion Passed: ${actualString} === ${expectedString}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actualString} !== ${expectedString}`);
  }
};


const letterCounts = countLetters("Lighthouse in the house");
console.log(letterCounts); 

const expected = { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };


assertEqual(letterCounts, expected);