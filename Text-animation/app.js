const author_name = document.querySelector(".author_name");

// splitting the name
const arr = [...author_name.textContent];
// we are gonna modify the text content so setting it to empty string
author_name.textContent = "";

// adding span between each char
for (i of arr) {
  author_name.innerHTML += `<span>${i}</span>`;
}

// selecting all span
const span = document.querySelectorAll("span");

let index = 0;
// each class should get the color(i.e class) after 50ms
let timer = setInterval(onTick, 50);

function onTick() {
  span[index].classList.add("fade");
  console.log(span[index]);
  index++;
  //   when index reaches the end then just return and exit
  if (index === span.length) {
    clearInterval(timer);
    timer = null;
    return;
  }
}
