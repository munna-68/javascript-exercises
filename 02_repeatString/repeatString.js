const repeatString = function(str, repeatTime) {
  let repeatedString = '';
  for(let i = 0; i < repeatTime; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
