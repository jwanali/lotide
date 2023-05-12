const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');



console.log(middle([1, 2, 3, 'h',7, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 5, 6]));
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6,7]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
