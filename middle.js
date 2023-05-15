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




 

const middle = function (array) {
  let middle = [];
  if (array.length === 0 || array.length === 1) {
    return []
  } else {
    if (array.length % 2 === 0) {
      middle[0] = array[(array.length / 2) - 1];
      middle[1] = array[array.length / 2];

    } else {
      middle[0] = array[(array.length - 1) / 2]
    }
  }

  return middle;
};
 
module.exports = middle;