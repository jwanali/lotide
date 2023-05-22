const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
  it("returns [ 2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(JSON.stringify(tail([1, 2, 3, 4, 5])),JSON.stringify([ 2, 3, 4, 5]));
  });
  it("returns [2,3,5] for [1, 2, 3, 5]", () => {
    assert.deepEqual(JSON.stringify(tail([1, 2, 3, 'Hello'])), JSON.stringify([2, 3, 'Hello']));
  });
  it("returns [2, 3,'Hello'] for [1, 2, 3, 'Hello']", () => {
    assert.deepEqual(JSON.stringify(tail([2,3,4,5,6,7,8])), JSON.stringify([3,4,5,6,7,8]));
  });
  
});


