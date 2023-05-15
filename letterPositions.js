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





const letterPositions = function(sentence) {

  const result = {};
 
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== ' ') {
      
    
    
      if (result[sentence.charAt(i)]) {
        result[sentence.charAt(i)].push(i);
      } else {
        result[sentence.charAt(i)] = [];
        
        result[sentence.charAt(i)][0] = i;
      }
    }
  }
  console.log(result);
  
  return result;
 
};

assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house");
module.exports = letterPositions;