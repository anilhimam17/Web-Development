import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

// Since the render function is injecting code into a div <App /> doesnt require a div anymore
ReactDOM.render(<App />, document.getElementById("root"));
