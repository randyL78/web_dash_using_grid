void function() {
  // create variables for inputs from settings widget
  const email = document.getElementById('toggle-email');
  const profile = document.getElementById("toggle-profile");
  const timezone = document.getElementById("timezone");
  const save = document.getElementById('save');
  const cancel = document.getElementById('cancel');

  // test if local storage is available
  const canStore = () => {
    try {
      return 'localStorage' in window && window.localStorage !== null;
    } catch (error) {
      return false;
    }
  }

  // listen for save button to be pressed
  save.addEventListener('click', () => {
    localStorage.setItem(email.id, email.checked);
    localStorage.setItem(profile.id, profile.checked);
    localStorage.setItem(timezone.id, timezone.value);
  });

  // clear the settings from local storage
  cancel.addEventListener('click', () => localStorage.clear());

  // check if local storage contains values, if so set the the fields
  if (canStore()) {
    try {
      
      email.checked = localStorage.getItem(email.id) === "true";
      profile.checked = localStorage.getItem(profile.id) === "true";
      timezone.value = localStorage.getItem(timezone.id);

    } catch (err) {
      console.log("Failed to retrieve local storage values");
    }
  }
  
}();