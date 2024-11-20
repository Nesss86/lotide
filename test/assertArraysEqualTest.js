const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 2, 4]));
  });

  it("returns false for [1, 2, 3] and [1, 2]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 2]));
  });
});