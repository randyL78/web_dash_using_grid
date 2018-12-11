void function() {


  // ********* notifications *************

  const bell = document.getElementsByClassName("bell")[0];
  const notifications = document.getElementById("notifications");
  const bellSound = document.getElementById("bell-sound");

  console.log(bellSound);
  
  // create the html for the banner
  const notificationHtml =
  `
    <p>Dave needs to see you</p>
    <p>The Mac you ordered has arrived</p>
    <p>Lunch at Applebee's</p>
  `;

  notifications.innerHTML = notificationHtml;

  // event listeners
  bell.addEventListener('click', () => {

    // after first click remove green light and shake effect
    if (bell.classList.contains("bell-new")) {
      bell.classList.remove("bell-new");
      document
        .getElementsByClassName("bell-shake")[0]
        .classList.remove("bell-shake");
    }

 

    if (notifications.classList.contains("hidden")) {
      notifications.classList.remove("hidden");
    } else {
      notifications.classList.add("hidden");
    }
  });

  
  // bell.addEventListener("mouseover", () => {
  //   bellSound.currentTime = 3;
  //   bellSound.play();
  // });

  // bell.addEventListener("mouseleave", () => {
  //   console.log("stop ringing");
  //   bellSound.pause();
    
  // });





  // ********** alert banner *************

  const alert = document.getElementById("alert");

  // create the html for the banner
  const alertHtml = 
    `
    <div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
      <p class="alert-banner-close">x</p>
    </div>
    <div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>4</strong> new messages</p>
      <p class="alert-banner-close">x</p>
    </div>
    `
  alert.innerHTML = alertHtml;

  // use event bubbling to listen for close button on alert container
  // *Use this method for future proofing where we may want to add more banners
  alert.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      element.parentElement.style.display = "none";
    }

  });

}();