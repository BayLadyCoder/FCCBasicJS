// Write Reusable JavaScript with Functions
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line


function reusableFunction () {
  console.log("Hi World");
}

reusableFunction();

//Passing Values to Functions with Arguments
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a+b);
}

functionWithArgs(5, 3);

// Global Scope and Functions// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/*
	oopsGlobal variable doesn't be declared with var keyword,
	so it's automatically become a global variable even though
	it's declared inside a function block.
*/


// Local Scope and Functions
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined

// Example
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "test";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);
// Now remove the console log line to pass the test


// Global vs. Local Scope in Functions

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
//The function myFun will return "Head" 
//because the local version of the variable is present.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Return a Value from a Function with Return
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));
console.log(minusSeven(10));
