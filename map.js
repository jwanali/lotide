const map = function (array, callback ) {
  const result = [];
  for (let item of array) {
   
    result.push(callback(item));
  }
  return result;
};
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



const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4,5,6,7,8,9,10];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(map(words,word => word.length),[6,7,2,5,3]);
assertArraysEqual(map(numbers, (number) => number * 2),[2,4,6,8,10,12,14,16,18,20]);
const person = [{name: 'Rick',age: 53},{name: 'Ron', age: 66 },{name: 'Lio', age: 16},{name: 'Sara', age :27}];

assertArraysEqual(map(person, person => person.name), ['Rick','Ron','Lio','Sara']);

module.exports = map;
