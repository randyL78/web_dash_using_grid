void function() {
  // ********** alert banner *************

  const alert = document.getElementById("alert");

  // create the html for the banner
  const alertHtml = 
    `
    <div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
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