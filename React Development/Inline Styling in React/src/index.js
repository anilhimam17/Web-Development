//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

// Date Time Objects
var timeCaption = null;
var timeOfDay = new Date(2002, 4, 17, 10).getHours();

// JSON Style Object for Morning
var colorCondition = {
  color: "blue",
};

// Conditions for dynamic behaviour
if (timeOfDay >= 6 && timeOfDay < 12) {
  timeCaption = "Good Morning";
} else if (timeOfDay >= 12 && timeOfDay < 16) {
  timeCaption = "Good Afternoon";
  colorCondition.color = "yellow";
} else if (timeOfDay >= 16 && timeOfDay < 20) {
  timeCaption = "Good Evening";
  colorCondition.color = "green";
} else {
  timeCaption = "Good Night";
  colorCondition.color = "purple";
}

ReactDom.render(
  <div>
    <div className="heading">
      <h1 style={colorCondition}>{timeCaption}</h1>
    </div>
  </div>,
  document.getElementById("root")
);
