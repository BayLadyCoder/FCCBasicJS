// Iterate with JavaScript While Loops
// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

//Iterate with JavaScript For Loops
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i =0; i <5; i++) {
    myArray.push(i+1);
}

// Iterate Odd Numbers With a For Loop
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i =1; i<10 ;i+=2) {
  myArray.push(i);
}


//Count Backwards With a For Loop
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (i = 9 ; i > 0 ; i-= 2) {
  myArray.push(i);
}



//Iterate Through an Array with a For Loop
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length ; i++) {
  total += myArr[i];
}


//Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i =0 ; i < arr.length; i++) {
    for (var j =0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


//Iterate with JavaScript Do...While Loops
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

while (i < 5) {
  myArray.push(i);
  i++;
}

do {
  myArray.push(i);
  i++;
} while (i < 5);

// Lookup Profile Exercise 
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
    }
    else if (name === contacts[i].firstName && !(contacts[i].hasOwnProperty(prop))) {
        return "No such property";
    }
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

//Generate Random Fractions with JavaScript
