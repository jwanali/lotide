const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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


const eqObjects = function(object1, object2) {
 
  if (Object.keys(object1).length !== Object.keys(object2).length ) {
    return false;
  } else {
      for (const key in object1) {
        if ( Array.isArray(object1[key]) && Array.isArray(object2[key])) {
         
          if (!eqArrays(object1[key],object2[key])) {
            return false;
          }
        } else if (object1[key] !== object2[key]) {
          return false;
        }
    
        
      }
  }
  
  

  return true;
  
};


/*
const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject= { size: "medium", color: "red" };

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);


const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
*/

module.exports = eqObjects;