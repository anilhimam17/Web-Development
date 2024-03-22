alert("Hello User!\n\
Now rolling the die ...");

var output1 = Math.floor(Math.random() * 6) + 1;
var output2 = Math.floor(Math.random() * 6) + 1;

if (output1 == 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (output1 == 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (output1 == 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (output1 == 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (output1 == 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (output2 == 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (output2 == 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (output2 == 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (output2 == 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (output2 == 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (output1 > output2) {
    alert("Hey Player 1, You have won this duel !!!!!!\n\
Player 2, Better Luck next time");
} else if (output2 > output1) {
    alert("Hey Player 2, You have won this duel !!!!!!\n\
Player 1, Better Luck next time");
} else {
    alert("Damn, its a tie. Settle this with another try ✌🏼");
}
