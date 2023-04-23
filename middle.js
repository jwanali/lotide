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

const middle = function (array) {
  let result = [];
  if (array.length === 0 || array.length === 1) {
    return []
  } else {
    if (array.length % 2 === 0) {
      result[0] = array[(array.length / 2) - 1];
      result[1] = array[array.length / 2];

    } else {
      result[0] = array[(array.length - 1) / 2]
    }
  }

  return result;
};
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 7, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 5, 6]));
console.log(assertArraysEqual(middle([1,2,3,4,5]),[3]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6,7]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));