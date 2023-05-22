const eqArrays = require('./eqArrays')

const assertArraysEqual= require('./assertArraysEqual')





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