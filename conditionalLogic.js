// Understanding Boolean Values
function welcomeToBooleans() {

// Only change code below this line.
return true; // Change this line
// Only change code above this line.
}


//Use Conditional Logic with If Statements
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue == true) {
      return "Yes, that was true";
  }

  return "No, that was false";
  
  
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);


//Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

//Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

