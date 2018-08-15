
// Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line


// Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


// Escape Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line


// Concatenating Strings with Plus Operator
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line
var myStr = "This is the start. " + "This is the end.";


// Concatenating Strings with the Plus Equals Operator
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line
var myStr = "This is the first sentence. ";

myStr += "This is the second sentence.";


// Constructing Strings with Variables
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Bay";
var myStr = "My name is " + myName + " and I am well!"; 

// Appending Variables to Strings
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line
var someAdjective = "fun!";
var myStr = "Learning to code is ";

myStr += someAdjective;


// Find the Length of a String
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.
lastNameLength = lastName.length;


// Use Bracket Notation to Find the First Character in a String
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];


//Use Bracket Notation to Find the Nth Character in a String
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];


//Use Bracket Notation to Find the Last Character in a String
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length-1];


//Use Bracket Notation to Find the Nth-to-Last Character in a String
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];


// Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "My " + myNoun + " is " + myAdjective + ", and he " + myVerb + " so " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");