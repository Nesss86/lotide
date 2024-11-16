const findKeyByValue = function (object, value) {
  for(const key in object) {
    if(object[key] === value) {
      return key;
    }
  }
  return undefined;
}


const assertEqual = function(actual, expected) {
  console.log(`Testing: expected ${expected}, got ${actual}`);
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestMovies = {
  movie1: "Inception",
  movie2: "Titanic",
  movie3: "Interstellar"
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestMovies, "Titanic"), "movie2"); // Should pass
assertEqual(findKeyByValue(bestMovies, "Avatar"), undefined); // Should pass

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined); // Should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "the expanse"), undefined); // Should fail (case-sensitive mismatch)

// Add failing cases:
assertEqual(findKeyByValue(bestMovies, "Titanic"), "movie1"); // Should fail (Titanic is under movie2)
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy"); // Should fail (The Expanse is under sci_fi)