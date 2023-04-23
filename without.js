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
const without = function(source,itemsToRemove) {
  let result = [];
  
  for (let i = 0;i <source.length; i++) {
    let itemExist;
    for (let n = 0; n < itemsToRemove.length; n++) {
      if(source[i] === itemsToRemove[n]){
        itemExist = true;
      } else {
        itemExist = false;
      }
    }
    if (!itemExist) {
      result.push(source[i]);
    }
  }

  
 
 return result;
};






const words = ["hello", "world", "lighthouse"];
const newResult =without(words, ["lighthouse"]);
console.log(words);
console.log(newResult);
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(newResult,words)
assertArraysEqual([1,2,3],[1,3,2]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(["lighthouse"],words)
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "c", "3"], [1, 2, "c"]); // => ["1", "2"]
without(["1", "2", "b"], [1, 2, "3"]);