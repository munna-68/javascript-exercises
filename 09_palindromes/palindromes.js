const palindromes = function (str) {
  let reversedStr = str.split('').reverse().join('')

  if(str === reversedStr) return true;
  return false
};

// Do not edit below this line
module.exports = palindromes;
