const openModalTrigger = document.querySelector(".trigger");

const closeModalTrigger = document.querySelector(".close");

const modal = document.querySelector(".modal");

// (function main() {
//   console.log("hello world");
// })();\

(function main() {
  openModalTrigger.addEventListener("click", () => {
    modal.classList.add("open");
  });

  closeModalTrigger.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // if clicked anywhere except on modal
  // runs only if modal is open
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
})();
