// Promise.all method
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Any: Promise1 Success");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise Any: Promise2 Success");
    reject("Promise Any: Promise2 Failed");
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Any: Promise3 Success");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
