
const eqArrays = function (firstArray, secondArray) {

  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;;
    }
  }
  return true;
};



const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }


    }
  }



  return true;

};



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