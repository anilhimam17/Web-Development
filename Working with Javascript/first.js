// Accessing the Inner HTML to make changes to Tag
var title = document.querySelector(".title");
title.innerHTML = "Hello, User";

// Asking the User to input their name
var name = prompt("Enter your name for a Suprise 🙂");
title.innerHTML = "Hello, " + name;