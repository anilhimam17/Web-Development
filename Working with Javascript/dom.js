// Accessing HTML using the DOM

/*
Accessing the Caption HTML
- firstElementChild: <html>
- lastElementChild: <body>
- firstElementChild: <div class="header">
*/
var caption = document.firstElementChild.lastElementChild.firstElementChild
console.log(caption)

/*
Accessing the Style Tag
*/
var style = document.firstElementChild.firstElementChild.lastElementChild
console.log(style)

// ---------------------------------------------------------------------------------

/*
General Access of Elements using JS DOM:
- document.querySelector("Any CSS Style Selector to Identify specific tags")
- document.getElementById(<id>)
- document.getElementByTagName(<tag>)
- document.getElementByClassName(<class>)

On accessing the Element then .innerHTML property can be used to access / modify the inner
html of any selected tag.
*/

// Accessing the InnerHTML
caption = document.querySelector(".caption").innerHTML
console.log("Original Value: " + caption)

// Making changes to the InnerHTML
/* 
document.querySelector(".caption").innerHTML = "Making Changes using the DOM"
caption = document.querySelector(".caption").innerHTML
console.log("Changed Value: " + caption)
*/

document.querySelector(".caption").innerHTML = "<h3>Making Changes using the DOM</h3>"
caption = document.querySelector(".caption").innerHTML
console.log("Changed Value: " + caption)

// ---------------------------------------------------------------------------------

// Manipulating Elements in JS

// Changing the Properties of the Grid Title
document.querySelector(".gridTitle h3").style.fontSize = "30px"
document.querySelector(".gridTitle h3").innerHTML = "This is the Grid Title"

// Changing the Properties of the Grid Body
document.querySelector(".container .gridBody > h3").style.fontFamily = "monaco"
document.querySelector(".container .gridBody > h3").innerHTML = "This is the Grid Body Column 1"

// Changing the Properties of the Grid Foot
document.querySelector(".gridFoot > h3").style.padding = "10px"
document.querySelector(".gridFoot > h3").style.fontFamily = "georgia"
document.querySelector(".gridFoot > h3").innerHTML = "This is the Grid Footer"

// ---------------------------------------------------------------------------------

// Applying a Class List Change to provide PlugIn Functionality to Styling
document.querySelector(".container").classList.add("colorGrid")

/*
By using a Class List we can dynamically add class to elements of a HTML page
- Thus it PlugsIn additional CSS properties
- Further Legacy CSS classes can also be removed

The below code can override the original css script removing the grid display
*/

// document.querySelector(".container").classList.remove("container")