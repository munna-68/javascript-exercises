const removeFromArray = function(arr, ...toRemove) {
  let toRemoveArr = [...toRemove];
  let removedArr = [];

  for(let item of arr) {
    for(let toRemoveItem of toRemoveArr) {
      if(toRemoveItem === item) {
        continue
      } else {
        removedArr.push(item)
      }
    }
  }

  return removedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
