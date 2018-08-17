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

//Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

//Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

//Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

//Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

//Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  
  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);


//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 &&  val >= 25) {
   
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10 ) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);


