const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true for equal arrays [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return false for different arrays [1, 2, 3] and [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("should return true for equal arrays ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("should return false for arrays with different types ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
});
