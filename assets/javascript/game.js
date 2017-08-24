$(document).ready(function() {

// GLOBAL VARIABLES =======================================================>
// This is where I'm going to eventually put all the variables which I think need to be globally accessible. 


// I need these to get written into the appropriate p tags in my html
var wins = 0;
var losses = 0;
var sumOfGuesses = 0;
var valueToMatch = valueToMatchFunction();


// Variables to store the random values of the gems. They receive the values from the functions.
var blueGemValue;
var redGemValue;
var greenGemValue;
var yellowGemValue;



// Functions =======================================================>
// This is where I'm going to eventually put all the functions.

// I think that I need the larger function here, which will be the new game function, which will reset the function and start over everything from scratch.
$("#gameStartRestart").click(function() {
	$(this).newGame();
});

function newGame() {
	sumOfGuesses = 0;
	valueToMatchFunction();
	randomBlueGemValue();
	randomRedGemValue();
	randomGreenGemValue();
	randomYellowGemValue();
	console.log(valueToMatch);
}

newGame();

// A function to make a random number between 19-120
function valueToMatchFunction() {
	return Math.floor(Math.random() * 102) + 19;
}



// Then, a function which will assign a click handler to each individual image div.
$("#blueGem").click(function() {
	sumOfGuesses = blueGemValue + sumOfGuesses;
	console.log(sumOfGuesses);
});

$("#redGem").click(function() {
	sumOfGuesses = redGemValue + sumOfGuesses;
	console.log(sumOfGuesses);
});

$("#greenGem").click(function() {
	sumOfGuesses = greenGemValue + sumOfGuesses;
	console.log(sumOfGuesses);
});

$("#yellowGem").click(function() {
	sumOfGuesses = yellowGemValue + sumOfGuesses;
	console.log(sumOfGuesses);
});



// Function to get me the random value assigned to the crystals. I need to make this only run once, until the function newGame is called.  Right now, it will do this every single time that one of those divs is clicked.
function randomBlueGemValue() {
	blueGemValue = Math.floor(Math.random() * 12) + 1;
	console.log(blueGemValue);
};

function randomRedGemValue() {
	redGemValue = Math.floor(Math.random() * 12) + 1;
	console.log(redGemValue);
};

function randomGreenGemValue() {
	greenGemValue = Math.floor(Math.random() * 12) + 1;
	console.log(greenGemValue);
};

function randomYellowGemValue() {
	yellowGemValue = Math.floor(Math.random() * 12) + 1;
	console.log(yellowGemValue);
};



// Function to add points to wins or losses

if (sumOfGuesses === valueToMatch) {
	wins++;
	$("#wins").append("You won! Congratulations!");
	newGame();
}

else if (sumOfGuesses > valueToMatch) {
	losses++;
	$("#losses").append("You lost! Sorry!");
	newGame();
}

});

