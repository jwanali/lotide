const eqArrays = function(firstArray,secondArray) {
  
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;;
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
 
const flatten = function(array) {
  let flattened = [];
  for(let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])) {
      
      for (let n = 0; n < array[i].length; n++) {
        flattened.push(array[i][n]);
      }
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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
module.exports = flatten;