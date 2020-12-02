const button = document.querySelector(".btn");

// prettier-ignore
button.addEventListener("click", () => {
  // Let's check if the browser supports notifications

  // window object has a function notification
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
    return;
  }

  //  or you can do this way
  //  if (!window.Notification) return;


  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // create a notification
    createNotify();
    return;
  }

  // else request for notification
  Notification.requestPermission().
  then(permission => {if(permission==="granted"){
      console.log('hi');
      createNotify();
  }})
});

function createNotify() {
  const notification = new Notification("My-Title", {
    body: "Hey, how are you doing?",
    icon: "icons8-among-us-150.png",
  });

  notification.onclick = () => {
    window.open("https://www.google.com");
  };
}

// icons from https://icons8.com/icon/pack/logos/clouds
