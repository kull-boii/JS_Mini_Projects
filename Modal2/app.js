const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const cross = document.querySelector("i");

btn.addEventListener("click", () => {
  console.log("clicked");
  modal.classList.remove("hide");
});

cross.addEventListener("click", () => {
  modal.classList.add("hide");
});
 