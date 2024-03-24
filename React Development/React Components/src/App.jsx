/* 
- Utilising the App.jsx convention to store all the JSX components 
of the HTML Page that need to be rendered.
- Thus it requires only the react module alongwith the imports for all
the other JSX components of the HTML page.
*/

import React from "react";
import Heading from "./Heading";
import List from "./List";
import Footer from "./Footer";

// The app function compiles all the JSX components to be rendered
function App() {
  // Return Statement requires a single tag: div, ul, ... which is enclosing
  return (
    <div>
      <Heading />
      <List />
      <Footer />
    </div>
  );
}

// Exporting the App with all the JSX components to be rendered
export default App;
