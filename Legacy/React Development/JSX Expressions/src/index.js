import React from "react";
import ReactDOM from "react-dom";

/* 
Basic React JS code
----------------------------------------------------------
ReactDOM.render(
  <div>
    <h1>Hello, World from React JS!!</h1>
    <ol>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ol>
  </div>,
  document.getElementById("root")
); 
*/

/*
Render Template while using Javascript Expressions
----------------------------------------------------------
*/

// Declaring a JS variable and parsing the variable to a placeholder
var nameFirst = "Godugu";
var nameLast = "Anil Himam";
var number = Math.floor(Math.random() * 10) + 1;

ReactDOM.render(
  <div>
    <h1>
      Hello, {nameFirst} {nameLast}
    </h1>
    <h4>Your Favourite Things</h4>
    <ol>
      <li>Cars</li>
      <li>Bikes</li>
      <li>Artificial Intelligence</li>
      <li>Racing and Racing Games</li>
      <li>Action Movies and Web Series</li>
      <li>Hanging out with people</li>
    </ol>
    <h4>My Favourite number is: {number}</h4>
  </div>,
  document.getElementById("root")
);
