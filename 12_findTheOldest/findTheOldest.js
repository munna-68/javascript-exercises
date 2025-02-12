const findTheOldest = function(arr) {
  let oldestPerson = null;
  let oldestAge = 0;
  const currentYear = new Date().getFullYear(); // Get the current year
  
  arr.forEach(element => {
    const yearOfDeath = element.yearOfDeath || currentYear; // If yearOfDeath is undefined, use the current year
    const currentAge = yearOfDeath - element.yearOfBirth; // Calculate age
    
    if(currentAge > oldestAge) {
      oldestAge = currentAge;
      oldestPerson = element; // Save the whole person object
    }
  });
  
  return oldestPerson; // Return the full person object, not just the name
};

// Do not edit below this line
module.exports = findTheOldest;
