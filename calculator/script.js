// step 1 : query all the number buttons and the operator buttons separately

document.querySelectorAll(".num").forEach((option) => {
  option.onclick = () => {
    let h3 = document.createElement("h3");
    let num = (h3.innerHTML = option.value);
    document.querySelector("#display").append(h3);
    let number = parseInt(num);
  };
});
document.querySelectorAll(".op").forEach((option) => {
  option.onclick = () => {
    let h4 = document.createElement("h3");
    h4.innerHTML = option.value;
    document.querySelector("#display").append(h4);
  };
});

// step 2: link the numbers and operator to the display space

// function equal() {
//   let val = option.dataset.num;
//   let operator = option.dataset.op;
//   if (operator == "+" && val > 0) {
//     let result = val + val;

//     let equalTo = document.querySelector(".opa");
//     equalTo.onclick = () => {
//       let h3 = document.createElement("h3");
//       h3.innerHTML = result;
//     };
//   }
// }

equal();
// step 3 : write a condition that will activate the operators to perform the calculation

// step 4: write a function that will display the finale result of the calculation.
