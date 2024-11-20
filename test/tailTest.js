const tail = require("../tail");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));  // Should print ["Lighthouse", "Labs"]

// Check if the original array remains unchanged
console.log(words.length);  // Should print 3, as the original array should still have 3 elements
