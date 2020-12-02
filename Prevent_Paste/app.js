const pasteArea = document.querySelector("#area2");

pasteArea.addEventListener("paste", function (event) {
  alert("You can't copy paste!!..");
  event.preventDefault(); // to prevent from pasting
});
