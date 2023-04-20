// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(" Lighthouse Labs", "Lighthouse Labs");
assertEqual(" Lighthouse Labs", "Lighthouse Labs");
assertEqual(14, 14);
assertEqual(25, 75);


