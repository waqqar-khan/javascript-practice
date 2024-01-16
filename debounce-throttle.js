// debounce
let count = 0;
function debounceInputFn() {
  // calls an api and get data
  console.log("Debounce API call No.: ", ++count);
}

const debounce = function (func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const debounceFunction = debounce(debounceInputFn, 300);

// throttle
let countValue = 0;

function throttleInputFn() {
  // calls an api and get data
  console.log("Throttle API call No.: ", ++countValue);
}

const throttle = (funct, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      funct.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttleFunction = throttle(throttleInputFn, 100);
