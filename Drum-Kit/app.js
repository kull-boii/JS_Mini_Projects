function createSnowfall() {
  // creating multiple snowflakes
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("fas");
  // adding font-awesome i
  snow_flake.classList.add("fa-snowflake");

  // generating random snowflakes on the screen
  // according to screen width
  // left : x px means x px from left
  snow_flake.style.left = Math.random() * window.innerWidth - 30 + "px";

  //animation b/w 2 - 5 sec
  snow_flake.animationDuration = Math.random() * 5 + 2 + "s";

  // now appending snow_flake in body
  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 6000);
}

setInterval(createSnowfall, 100);
