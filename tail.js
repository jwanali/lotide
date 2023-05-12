const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    
    newArray[i] = array[i + 1];
    
    
  }
  return newArray;
};
console.log(JSON.stringify([2,3,'Hello']))
  /*

console.log(assertEqual(JSON.stringify(tail([1,2,3,5])),JSON.stringify([2,3,5])));
console.log(assertEqual(JSON.stringify(tail([1,2,4,5])),JSON.stringify([2,3,5])));
console.log(assertEqual(JSON.stringify(tail(['1',2,'hello',5])),JSON.stringify([2,'hello',5])));
console.log(assertEqual(JSON.stringify(tail([])),JSON.stringify([])));

*/
module.exports = tail;