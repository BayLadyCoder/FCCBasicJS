// Generate Random Fractions with JavaScript
// Math.random();

function randomFraction() {
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}

// Generate Random Whole Numbers with JavaScript
// Using Math.floor(); and Math.random();

// Example
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  // Only change code below this line.
  var result = 0;
  result = Math.floor(Math.random() * 10);
  return result;
}

//Use the parseInt Function with a Radix
/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

var a = parseInt("11", 2);

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.


Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
*/
function convertToInteger(str) {
  var result = 0;
  var loopLength = str.length - 1;
  var newNum = 0;
  var num = 0;
  var num2 = 0;
  var baseTwo = 0;

  var numOrNot = parseInt(str);

  if (isNaN(numOrNot)) {
    return NaN;
  } else {
    var j = 0;
    for (var i = loopLength; i >= 0; i--) {
      num = parseInt(str[j]);
      console.log("num Index " + j + " is " + num);

      if (num !== 0) {
        num2 = num * i;
        console.log("num2 before power is " + num2);
        baseTwo = Math.pow(2, num2);
        console.log("2 power " + num2 + " is " + baseTwo);
        newNum += baseTwo;
      }
      j++;

      console.log(newNum);
      result = newNum;
    }
    return result;
  }
}

convertToInteger("10011");
