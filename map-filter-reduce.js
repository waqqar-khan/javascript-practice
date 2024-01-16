// map method
const numbers1 = [10, 20, 30, 40, 50];

// const doubledNumbers = numbers1.map(function(number) {
//     return number * 2;
// }) <-- Anonymous function -->

const doubledNumbers = numbers1.map((number) => number * 2);

console.log("Map: ", doubledNumbers);

// filter method
const numbers2 = [10, 20, 30, 40, 50];

// const filteredNumbers = numbers2.filter(function(item) {
//     return item > 20;
// }); <-- Anonymous function -->

const filteredNumbers = numbers2.filter((item) => item > 20);

console.log("Filter: ", filteredNumbers);

// reduce
const numbers3 = [10, 20, 30, 40, 50];

const initialValue = 0;

// const sumOfArrayValues = numbers3.reduce(function(accumalator, currentValue) {
//     return accumalator + currentValue;
// }, initialValue); <-- Anonymous function -->

const sumOfArrayValues = numbers3.reduce(
  (accumalator, currentValue) => accumalator + currentValue,
  initialValue
);

console.log("Reduce: ", sumOfArrayValues);
