const palindromes = function (str) {
  let filteredArr = [];
  let strArr = str.split('');

  // Filter out non-alphabetic characters
  for (let word of strArr) {
    if (/^[a-zA-Z]+$/.test(word)) {
      filteredArr.push(word.toLowerCase()); // convert to lower case for case-insensitive check
    }
  }

  let reversedStr = filteredArr.slice().reverse().join(''); // Create reversed version of filtered string

  if (filteredArr.join('') === reversedStr) return true; // Check if the filtered string is the same forward and backward
  return false;
};


// Do not edit below this line
module.exports = palindromes;
