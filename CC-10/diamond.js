const numb = document.querySelector("#numbInput");
const inputDiv = document.querySelector(".inputDiv");

let n = numb.value;
console.log(n);

numb.addEventListener("click", (e) => {
  for (let i = 1; i <= n; i++){
    
  }
})


// for (let i = 1; i <= n; i++) {
//   for (let j = n; j > i; j--) {
//     inputDiv.innerHTML += " ";
//   }
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       inputDiv.innerHTML += "*";
//     } else {
//       inputDiv.innerHTML += " ";
//     }
//   }
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     inputDiv.innerHTML += " ";
//   }
//   for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//     if (k === 1 || k === (n - i) * 2 - 1) {
//       inputDiv.innerHTML += "*";
//     } else {
//       inputDiv.innerHTML += " ";
//     }
//   }
// }
