const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  console.log("Server is running on port 3000");
});

// Create an arrow function named “mySum”.
// Your function should accept an arbitrary number of arguments using the REST operator.
// Your function should return the sum of all of its inputs.

const mySum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
// console.log(mySum(1, 2, 3)); //6

server.listen(3000);

// Put this function in a different module and export it.
// Then, in this module, import the module that contains your function and call it from this module.
module.exports = mySum;

// Create an array of numbers named “myArr”.
// Your array may have any length (try different lengths to test it).
const myArr = [1, 2, 3, 4];

// Call your function passing as arguments the members of myArr array using the SPREAD operator.
// Assign the result to a “result” variable and console log it.
// console.log(mySum(...myArr)); //10

// Create a new array named “mySecondArr”.
// Map the contents of your myArr array to mySecondArr array using an anonymous function that multiplies each member of myArr by 2.
const mySecondArr = myArr.map((element) => element * 2);
console.log(mySecondArr); //[ 2, 4, 6, 8 ]

// Filter the contents of your mySecondArr using an anonymous function that console logs the numbers above average number (you’ll need to find the average first).
const average =
  mySecondArr.reduce((sum, num) => sum + num, 0) / mySecondArr.length;
// 5

for (let i = 0; i < mySecondArr.length; i++) {
  if (mySecondArr[i] > average) {
    console.log(mySecondArr[i]); // 6,8
  }
}

// Use setTimeout() function.
// Pass it a callback function as a parameter that console logs “Goodbye” after 3 seconds.
const sayGoodbye = () => {
  console.log("Goodbye"); //Goodbye
};
setTimeout(sayGoodbye, 3000);

// Create an “Employee” object that has the following key-value pairs: “name”, “email”, “department” and “startDate”.
const Employee = {
  name: "Jane Doe",
  email: "jane123@doe.com",
  department: "Marketing",
  startDate: "2020-01-01",
};

const { name, email } = Employee;
const Person = { name, email };
console.log(Person);
