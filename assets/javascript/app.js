// declare variables
var corr = 0;
var wrg = 0;
var inc = 0;
var totalQuests = 10;
var time = 0;
var randomQuest, intervalId;
var answerButtons = [];

// gameOver function/else thing
// click function
$(document).ready(function(){
    play();
    // function to play game
    function play() {
	// setup play area
	$(".answer").hide();
	$(".gameOver").hide();
	$(".qAndA").show();
	time = 10;
	// picks random question
	randomQuest = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length - 1)];
	// push answers to own array and shuffle
	answerButtons.push(randomQuest.correct, randomQuest.a , randomQuest.b, randomQuest.c);
	answerButtons.sort(function(a, b){
	    return 0.5 - Math.random();
	});

	// html q and a's
	$(".question").html(randomQuest.question);
	for (var  i = 0; i < answerButtons.length; i++) {
	    var choices = $("<button>");
	    choices.addClass("answerChoices");
	    choices.text(answerButtons[i]);
	    choices.after($("<br>"));
	    $(".multiChoice").append(choices);
	    if (answerButtons[i] === randomQuest.correct) {
		choices.addClass("correct");
	   // } else {
	//	choices.addClass("notRight");
	    }
	};
	intervalId = setInterval(decrease, 1000);
    }; // close play function

    // decrease time function
    function decrease() {
	time--;
	$(".timeLeft").html(time);

	if (time === 0){
	    inc++;
	    totalQuests--;
	    $(".blank").html("out of time!");
	    // run showAnswer function
	    showAnswer();
	}
    };

    $(document).on("click",".answerChoices", function() {
	if ($(this).hasClass("correct")) {
	    corr++;
	    totalQuests--;
	    $(".blank").html("correct!");
	    showAnswer();
	} else {
	    wrg++;
	    totalQuests--;
	    $(".blank").html("wrong!");
	    showAnswer();
	}
    });

    // showAnser function
    function showAnswer() {
	// hide question
	$(".qAndA").hide();
	$(".multiChoice").empty();
	answerButtons = [];
	// show answer div
	$(".answer").show();
	// add src to  <img>
	$(".answerIs").html("The answer is: " + randomQuest.correct);
	$(".imgAnswer").attr("src", randomQuest.imgUrl);
	// stop timer
	clearInterval(intervalId);
	// set timeOut to 5 seconds then show next question
	setTimeout (function() {
	   gameOver();
	}, 3000);
    };

    function gameOver() {
	if (totalQuests === 0) {
	    $(".answer").hide();
	    $(".gameOver").show();
	    $("#correct").html(corr);
	    $("#wrong").html(wrg);
	    $("#incomplete").html(inc);
	} else {
	    play();
	}
    }

    function restart() {
	corr = 0;
	wrg = 0;
	inc = 0;
	totalQuests = 10;
	time = 0;
	answerButtons = [];
	play();
    }

    $(".reset").click(function() {
	restart();
    });
});
