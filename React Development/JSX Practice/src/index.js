//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDom from "react-dom";

var name = "Godugu Anil Himam";

ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>
      Copyrights<sup>&#169;</sup> {new Date().getFullYear()}
    </p>
  </div>,
  document.getElementById("root")
);
