const takeUntil = function(array, callback) {
  const result = [];
  for (item of array ) {
    if (callback(item)) {
      return result
    }
    result.push(item);
  }

  return result;

  // ...
}



const eqArrays = function(firstArray,secondArray) {
  
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    } 
  }
  return true;
}



const assertArraysEqual= function (array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`\u2705 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



assertArraysEqual(takeUntil(data2,x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(data1,x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(words,word => word === 'to'), ["ground", "control"]);
assertArraysEqual(takeUntil(numbers,num => num === 5),[1,2,3,4]);
module.exports = takeUntil;
