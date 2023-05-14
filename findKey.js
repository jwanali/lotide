const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKey = function(object,callback) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
    return key;
   }
  }
}
const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const helper =  function (object){
  if (object.stars === 1) {
   
   return true;
 }
};

assertEqual(findKey(data1, x => x.stars === 1), 'Blue Hill');
assertEqual(findKey(data1, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(data1, x => x.stars === 2), 'noma');
assertEqual(findKey(data1, x => x.stars === 2), 'noma');



assertEqual(findKey(data1,helper),'Blue Hill');
module.exports = findKey;