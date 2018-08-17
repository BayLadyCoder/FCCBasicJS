//Selecting from Many Options with Switch Statements
/*
pseudocode example:

switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);


//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff"
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);
