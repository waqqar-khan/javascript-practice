// Event Capturing
document.querySelector("#outer").addEventListener(
  "click",
  () => {
    console.log("Capturing: Outer Layer Clicked!");
    
  },
  true
);

document.querySelector("#middle").addEventListener(
  "click",
  (e) => {
    console.log("Capturing: Middle Layer Clicked!");
    e.stopPropagation();
  },
  true
);

document.querySelector("#inner").addEventListener(
  "click",
  () => {
    console.log("Capturing: Inner Layer Clicked!");
  },
  true
);

// Event Bubbling
// - Third parameter is by default false, so even if give false
// instead of nothing it will behave same as event Bubling concept
document.querySelector("#grandParent").addEventListener("click", () => {
  console.log("Bubbling: GrandParent Layer Clicked!");
});

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("Bubbling: Parent Layer Clicked!");
  e.stopPropagation();
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("Bubbling: Child Layer Clicked!");
});
