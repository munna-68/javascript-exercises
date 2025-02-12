const fibonacci = function(n) {
  let num = Number(n);
  if(num < 0) return "OOPS"
  if(num === 0) return 0;
  if(num === 1) return 1;
  let a = 0, b = 1, next;
  for(let i = 2; i <= num; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b
};

// Do not edit below this line
module.exports = fibonacci;
