// Promise.all method
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise All: Promise1 Success");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise All: Promise2 Success");
    reject("Promise All: Promise2 Failed");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise All: Promise3 Success");
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });


  // Promise.allSettled method
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise AllSettled: Promise4 Success");
    }, 4000);
  });
  
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise AllSettled: Promise5 Success");
      reject("Promise AllSettled: Promise5 Failed");
    }, 2000);
  });
  
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise AllSettled: Promise6 Success");
    }, 1000);
  });
  
  Promise.allSettled([promise4, promise5, promise6])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  
  // Promise.race method
  const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Race: Promise7 Success");
    }, 4000);
  });
  
  const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise Race: Promise8 Success");
      reject("Promise Race: Promise8 Failed");
    }, 2000);
  });
  
  const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Race: Promise9 Success");
    }, 1000);
  });
  
  Promise.race([promise7, promise8, promise9])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

 // Promise.any method
 const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Any: Promise10 Success");
    }, 4000);
  });
  
  const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise Any: Promise11 Success");
      reject("Promise Any: Promise11 Failed");
    }, 2000);
  });
  
  const promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise Any: Promise12 Success");
      reject("Promise Any: Promise12 Failed");
    }, 1000);
  });
  
  Promise.any([promise10, promise11, promise12])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

// Promise.any method catch block - to check each error which produce aggregated errors if all api calls are rejected
const promise13 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Promise Any: Promise13 Success");
    reject("Promise Any: Promise13 Failed");
    }, 4000);
  });
  
  const promise14 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise Any: Promise14 Success");
      reject("Promise Any: Promise14 Failed");
    }, 2000);
  });
  
  const promise15 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise Any: Promise15 Success");
      reject("Promise Any: Promise15 Failed");
    }, 1000);
  });
  
  Promise.any([promise13, promise14, promise15])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
      console.log(err.errors);
    });