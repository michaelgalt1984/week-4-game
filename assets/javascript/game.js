$(document).ready(function() {

// GLOBAL VARIABLES =======================================================>
// This is where I'm going to eventually put all the variables which I think need to be globally accessible. 


// I need these to get written into the appropriate p tags in my html
var wins = 0;
var losses = 0;
var sumOfGuesses = sumOfGuessesCalculator();
var valueToMatch = valueToMatchFunction();


// Variables to store the random values of the gems. They receive the values from the functions.
var blueGemValue = randomBlueGemValue();
var redGemValue = randomRedGemValue();
var greenGemValue = randomGreenGemValue();
var yellowGemValue = randomYellowGemValue();



// Functions =======================================================>
// This is where I'm going to eventually put all the functions.

// I think that I need the larger function here, which will be the new game function, which will reset the function and start over everything from scratch.
$("#gameStartRestart").click(function() {
	$(this).newGame();
});

function newGame(argument) {
	var wins = 0;
	var losses = 0;
	var sumOfGuesses = 0;
}



// First, a function which will assign a click handler to each individual image div.
$("#blueGem").click(function() {
	$(this).randomBlueGemValue();
});

$("#redGem").click(function() {
	$(this).randomBlueGemValue();
});

$("#greenGem").click(function() {
	$(this).randomBlueGemValue();
});

$("#yellowGem").click(function() {
	$(this).randomBlueGemValue();
});



// Function to get me the random value assigned to the crystals. I need to make this only run once, until the function newGame is called.  Right now, it will do this every single time that one of those divs is clicked.
function randomBlueGemValue() {
	Math.floor(Math.random() * 12) + 1,
};

function randomRedGemValue() {
	Math.floor(Math.random() * 12) + 1,
};

function randomGreenGemValue() {
	Math.floor(Math.random() * 12) + 1,
};

function randomYellowGemValue() {
	Math.floor(Math.random() * 12) + 1,
};




// Function to add all the values captured in the clicks on the individual images.
function sumOfGuessesCalculator(sumOfGuesses) {
	blueGemValue + redGemValue + greenGemValue + yellowGemValue,
};


// Function to add points to wins or losses

if (sumOfGuesses === valueToMatch) {
	wins++;
}

else if (sumOfGuesses > valueToMatch) {
	losses++;
}

});

