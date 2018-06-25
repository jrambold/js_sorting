const assert = require('chai').assert
const sort = require('../bubblesort')

describe("bubble sort", function() {
  context("can sort an array", function() {
    it("sorts when given an array", function() {
      assert.deepEqual(sort([4,2,3,1]), [1,2,3,4]);
    })
  });
});
