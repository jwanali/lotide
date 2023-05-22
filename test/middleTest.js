const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(JSON.stringify(middle([1, 2, 3, 4, 5])),JSON.stringify([3]));
  });
  it("returns [5,56] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(JSON.stringify(middle([1,2,3,4,5,6,7,8,9,10])), JSON.stringify([5,6]));
  });
  it("returns [2, 3] for [1, 2, 3, 'Hello']", () => {
    assert.deepEqual(JSON.stringify(middle([1, 2, 3, 'Hello'])), JSON.stringify([2,3]));
  });
  
});


