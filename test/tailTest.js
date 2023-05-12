const tail = require('../tail');
const assertEqual = require('../assertEqual');


console.log(assertEqual(JSON.stringify(tail([1,2,3,5])),JSON.stringify([2,3,5])));
console.log(assertEqual(JSON.stringify(tail([1,2,4,5])),JSON.stringify([2,3,5])));
console.log(assertEqual(JSON.stringify(tail(['1',2,'hello',5])),JSON.stringify([2,'hello',5])));
console.log(assertEqual(JSON.stringify(tail([])),JSON.stringify([])));