import generateName from "sillyname";
import superheros from "superheroes";

var generatedName = generateName();
var superhero = superheros.random();
console.log("My name is: " + generatedName);
console.log("I am: " + superhero);
