void function() {

  // create variables to store form field elements
  const user = document.getElementById("userField"); 
  const list = document.getElementById("userList");
  const message = document.getElementById("messageField");
  const send = document.getElementById("send");

  // variable store the html to add to datalist
  let usersHtml = "";

  // create an array of "users" to populate autocomplete
  // TODO: create this data as a separate file to mimic getting it from an API or database
  users = [
    "Johnny Ringo",
    "Victoria Chambers",
    "Wyatt Earp",
    "Taylor Swift",
    "Harry Potter",
    "John Snow",
    "James Madison",
    "Tom Cruise",
    "Jeffery Dean Morgan"
  ]

  // add users to datalist
  users.forEach(element => {
    usersHtml += `<option>${element}</option>`;
  });
  list.innerHTML = usersHtml;

  // event listeners
  send.addEventListener('click', e => {
    
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
      alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
      alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
      alert("Please fill out message fields before sending");
    } else {
      alert(`Message successfully sent to: ${user.value}`);
    }

  });

}();