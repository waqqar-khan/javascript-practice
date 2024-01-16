// Async - it always returns a promise
async function getData() {
  return "Async Function!";
}

// It(getData function) will return a promise
const dataPromise = getData();
console.log("dataPromise: ", dataPromise);

// we need to resolve promise using .then method
let resultDataPromise = dataPromise.then((res) => console.log("Res: ", res));
console.log("ResultDataPromise: ", resultDataPromise);

// another way
let p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!!");
});

async function getPromiseData() {
  return p;
}

// It(getPromiseData function) will return a promise
const dPromise = getPromiseData();
console.log("dPromise: ", dPromise);

// we need to resolve promise using .then method
let resultDPromise = dPromise.then((res) => console.log("Res: ", res));
console.log("resultDPromise: ", resultDPromise);

// Await can only be used inside Async
const API_URL = "https://api.github.com/users/wick119";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log("Response: ", response);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();

// 2nd way to handle errors in async await
// async function handlePromise() {
//   const data = await fetch(API_URL);
//   const response = await data.json();
//   console.log("Response: ", response);
// }

// handlePromise().catch((err) => console.log(err));
