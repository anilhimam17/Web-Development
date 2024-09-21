import React from "react";

// Accessing the Current Date and getting Time in Hours
const date = new Date(2002, 4, 17, 16);
const currentTime = date.getHours();

// Declaring the Greeting
let greeting;

// Declaring the Colorscheme JSON Object
const customStyle = {
  color: "",
};

// Declaring the Background Color JSON Object
const headerStyle = {
  border: "5px solid black",
  backgroundColor: "",
};

// Condtions for different Times of the Day
if (currentTime >= 6 && currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "blue";
  headerStyle.backgroundColor = "yellow";
} else if (currentTime >= 12 && currentTime < 16) {
  greeting = "Good Afternoon";
  customStyle.color = "orange";
  headerStyle.backgroundColor = "#2872D7";
} else if (currentTime >= 16 && currentTime < 20) {
  greeting = "Good Evening";
  customStyle.color = "green";
  headerStyle.backgroundColor = "yellow";
} else {
  greeting = "Good Night";
  customStyle.color = "purple";
  headerStyle.backgroundColor = "#6CDC23";
}

function Greeting() {
  return (
    <div style={headerStyle}>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}

// Exporting the Greeting Function
export default Greeting;
