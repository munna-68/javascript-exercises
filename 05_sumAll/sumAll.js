const sumAll = function(min, max) {
  let allTheNum = [];
  for(let i = min; i <= max; i++) {
    allTheNum.push(i);
  };
  return allTheNum.reduce((acc, current) => acc + current);
};

// Do not edit below this line
module.exports = sumAll;
