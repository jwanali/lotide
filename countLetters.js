const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (const iterator of sentence) {
    if (iterator !== ' ') {
      if (result[iterator]) {
        result[iterator] += 1;
      } else {
        result[iterator] = 1;
      }
    }
  }
  console.log(result);
  return result;

};

countLetters('Today was good day');
countLetters("lighthouse in the house");