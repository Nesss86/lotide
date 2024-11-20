const head = require("../head");

// Function to check if the test passed or failed
const testHead = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Test Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Test Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASES
testHead(head([5, 6, 7]), 5);  // Expected output: 5
testHead(head(["Hello", "Lighthouse", "Labs"]), "Hello");  // Expected output: "Hello"
