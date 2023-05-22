const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed:  ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;