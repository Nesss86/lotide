const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

const testHead = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Test Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Test Failed: ${actual} !== ${expected}`);
  }
};