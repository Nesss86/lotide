const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("should return false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it("should return true for 1 and 1", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
});
