$(document).ready(function() {

const magic8Ball = {};
magic8Ball.listOfAnswers = [
	"it is certain",
	"it is decidedly so",
	"without a doubt",
	"yes – definitely",
	"you may rely on it",
	"as i see it, yes",
	"most likely",
	"outlook good",
	"yes",
	"signs point to yes",
	"reply hazy, try again",
	"ask again later",
	"better not tell you now",
	"cannot predict now",
	"concentrate and ask again",
	"don\'t count on it",
	"my reply is no",
	"my sources say no",
	"outlook not so good",
	"very doubtful"
];
// answer stays hidden until question is asked
$("#answer").hide();

// define the method
magic8Ball.askQuestion = function(question) {
	// make ball shake when question is asked
	$("#8ball").effect("shake");
	// change image to answer side
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	// make answer fade in over 4 seconds
	$("#answer").fadeIn(4000);
	// create a random number
	const randomNumber = Math.random();
	// make the random number between 0 and the number of items in your array
	const randomNumberArray = randomNumber * this.listOfAnswers.length;
	// round down the number to be a whole number
	const randomIndex = Math.floor(randomNumberArray);
	// use that number to index a random number from the answers array
	const answer = this.listOfAnswers[randomIndex];
	// display the randomly chosen answer
	$("#answer").text(answer);

	console.log(question);
	console.log(answer);
};

const onClick = function() {
// hide the answer
$("#answer").hide();
// change back to 8-ball image
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

// wait half a second before showing promt
setTimeout(
    function() {
      	// show prompt to ask question
				const question = prompt("ASK A YES/NO QUESTION!");
				magic8Ball.askQuestion(question);
    }, 500);

};

$("#questionButton").click(onClick);

});
