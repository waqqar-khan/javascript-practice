// Function statement or Function Declaration
function fun() {
  console.log("Function statement or Function Declaration");
}

fun();

// Function Expression
let funcExpression = function () {
  console.log("Function Expression");
};

funcExpression();

// Higher Order Function (HOF):
function hofFunction(num1, num2, operator) {
  return operator(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log("Higher Order Function (HOF): ", hofFunction(10, 20, add));
console.log("Higher Order Function (HOF): ", hofFunction(10, 20, multiply));

// Anonymous Function
const divide = (a, b) => a / b;

const subtract = function(a, b) {
    return a - b;
};