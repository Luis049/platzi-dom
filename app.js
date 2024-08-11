// const container = document.querySelector(".container");

// const button = document.querySelector("button");

// container.addEventListener("mouseover", () => {
//   container.style.backgroundColor = "blue";
// });

// container.addEventListener("mouseout", () => {
//   container.style.backgroundColor = "red";
// });

// // button.addEventListener("click", () => {
// //   alert("Button clicked!");
// // });

// const buttonClickCallback = () => {
//   alert("Button Clicked!");
// };

// button.addEventListener("click", buttonClickCallback);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickCallback);
// }, 2000);


const button = document.querySelector("button");

const buttonClicked = (event) => {
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.textContext);
};

button.addEventListener("click", buttonClicked);