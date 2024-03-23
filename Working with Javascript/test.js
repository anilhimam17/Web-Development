/* 
Variables in JS:
- There is no strict type binding for variables in JS.
- Thus any datatype can be universally assigned using var keyword.
*/

// Initial Declaration
var firstVariable = "First Variable"
console.log("First value: " + firstVariable)

// Reassigning different values
firstVariable = 10
console.log("Second Value: " + firstVariable)

firstVariable = true
console.log("Third Value: " + firstVariable)

// ---------------------------------------------------------------------------

/*
Working with Strings in JS:
- Strings in JS work in a similar manner to python strings
- They can be concatenated by using the + (overloaded operator)
- Their length can be calculated using .length property
*/

// Declaring a String
var newString = "Hello, World"
console.log("Length of String: " + newString + " is: " + newString.length)

// Reassigning Values to the String variable
newString = "Hi Sai, how are you doing ? Its been a long time since we have talked won't you catchup sometime ?"
console.log("New String: " + newString)
console.log("Length of New String: " + newString.length)

// Slicing Strings
console.log("Accessing the first 30 chars:\n" + newString.slice(0, 30))
console.log("Accessing the mid 30 chars:\n" + newString.slice(30, 60))
console.log("Accessing the latter 30 chars:\n" + newString.slice(60, 90))

// Converting to Upper and Lower Cases
newString = newString.slice(0, 6)

console.log("Sub String: " + newString)
console.log("Lower Case: " + newString.toLowerCase())
console.log("Upper Case: " + newString.toUpperCase())

// ---------------------------------------------------------------------------

// Arithematic in JS
console.log("10 + 10: " + (10 + 10))
console.log("10 - 10: " + (10 - 10))
console.log("10 * 10: " + (10 * 10))
console.log("10 / 10: " + (10 / 10))
console.log("10 % 10: " + (10 % 10))

// Shortened Assignment Operator
var counter = 10
console.log("Increment: " + counter++)
console.log("Increment: " + counter--)
console.log("counter + 10: " + (counter += 10))
console.log("counter - 10: " + (counter -= 10))
console.log("counter * 10: " + (counter *= 10))
console.log("counter / 10: " + (counter /= 10))
console.log("counter % 10: " + (counter %= 10))

// ---------------------------------------------------------------------------

/*
Working with Functions in JS:
- Javascript functions have vary similar semantics to python functions
- They can take arguments without strict typing
- They can return arguments without strict typing
*/

// Function Declaration
function square() {

    // Local Variables
    var newCounter = 10
    var squaredValue = newCounter * newCounter

    // Console Output
    console.log("Counter Square: " + (newCounter * newCounter))

    // Alert
    alert("The Square of " + newCounter + " is: " + squaredValue)
}

// Function Call
square()

// Parameterised Functions
function factorial(n) {
    
    // Base Case
    var factVal = 1

    // Factorial Calculation
    for (var i = 1; i <= n; i++) {
        factVal *= i
    }

    // Console Output
    console.log("Factorial of: " + n + " is: " + factVal)

    // Alert
    alert("Factorial of: " + n + " is: " + factVal)
}

// Function Call
factorial(4)

// Functions with Return Values
function logistic(z) {
    return 1 / (1 + Math.pow(Math.exp, -z))
}

// Function Call
var logisticActivation = logistic(0.001)
console.log("Logistic Value of: " + 0.001 + " is: " + logisticActivation)

// ---------------------------------------------------------------------------

// Emulating a Die using Math.Random
for (var i = 0; i < 6; i++) {
    var dieVal = Math.floor(Math.random() * 6) + 1

    if (i + 1 == 1)
        console.log((i + 1) + "st try: " + dieVal)

    else if (i + 1 == 2)
        console.log((i + 1) + "nd try: " + dieVal)

    else if (i + 1 == 3)
        console.log((i + 1) + "rd try: " + dieVal)

    else
        console.log((i + 1) + "th try: " + dieVal)
}

// ---------------------------------------------------------------------------

// Comparison Operators

var sig1 = Math.floor(Math.random() * 2) + 1
var sig2 = Math.floor(Math.random() * 2) + 1

if (sig1 > 1 && sig2 > 1) {
    console.log("AND Operation Available")
} else if (sig1 > 1 || sig2 > 1) {
    console.log("OR Operation Available")
} else if (sig1 < 1 && sig2 < 1) {
    console.log("Not Operation Available")
}

// ---------------------------------------------------------------------------

/*
Arrays in JS:
- Arrays in JS have python like syntax
- They use [] with objects seperated by ,
- Arrays in JS like lists in python can take values of different datatypes to form a collection in an array
*/

var people = ["Anil", "Sai", "Anjali", "Nikhil", "D", "Nitya", "Sandeep", 8]

console.log("Array Display: " + people)
console.log("Value at 2nd Index: " + people[2])
console.log("Value at 3rd Index: " + people[3])
console.log("Length of the Array: " + people.length)

// Checking for elements in the Array
if (people.includes("Sai")) {
    console.log("Sai is present in the list")
}

if (!people.includes(10)) {
    console.log("10 is not present in the list")
}

// Slicing the elements of an Array
console.log("First 4 Elements: " + people.slice(0, 4))
console.log("Last 4 Elements: " + people.slice(4, 8))

// Appending Elements
console.log("Appended 9: " + people.push(9))
console.log("Extending the list with a concat: " + people.concat([10, "Pratik", "Saatwik"]))

/*
- Join() added the subsection / extension of the array to each of the elements of the array
- Concat() added the subsection / extension of an array at the end of the current array
*/

// Removing Elements
console.log("Current Array: " + people)
console.log("Removes and Returns the Last Element: " + people.pop())
console.log("Removes and Returns the Last Element: " + people.pop(1))

/*
- In JS Array the Pop() always removes and returns the last element.
- Thus it doesnt remove any element of the array at a given index on being parsed the index as a parameter.
*/

// ---------------------------------------------------------------------------