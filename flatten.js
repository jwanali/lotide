const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(firstArray,secondArray) {
  let equal = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i])) {

      if (eqArrays(firstArray[i],secondArray[i])){
        equal = true;
      } else {
        return false;
      }
      
    } else {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      } else {
        equal = true;
      }
    }
   
  }

    return equal;

}

const assertArraysEqual= function (array1,array2) {

  
  if (eqArrays(array1,array2)) {
    console.log(`\u2705 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${array1} !== ${array2}`);
  }
};
let flattened = [];
const flatten = function(array) {
  
  for(let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])) {
      
      flatten(array[i]);
    } else {
      flattened.push(array[i]);
      
    }
  }
  return flattened;

};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
const array = [1, 2, [3, 4], 5, [6]];
flatten(array);
assertArraysEqual(array,[1, 2, [3, 4], 5, [6]]);
assertArraysEqual([1,2,[4,3],5,[6]],[1, 2, [3, 4], 5, [6]]);
