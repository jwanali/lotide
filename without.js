
const assertArraysEqual= require('./assertArraysEqual')


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
const newResult = without(words, ["lighthouse"]);
console.log(words);
console.log(newResult);
without(words, ["lighthouse"]); 
assertArraysEqual(newResult,words)
assertArraysEqual([1,2,3],[1,3,2]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(["lighthouse"],words)
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "c", "3"], [1, 2, "c"]); // => ["1", "2"]
without(["1", "2", "b"], [1, 2, "3"]);
module.exports = without;