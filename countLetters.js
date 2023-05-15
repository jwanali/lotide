
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


module.exports = countLetters;