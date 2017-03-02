// declare new empty array to hold question objects
var triviaQuestions = [];

// create object for questions
function NewQuestion(question, correct, a, b, c, imgUrl) {
    this.question = question;
    this.correct = correct;
    this.a = a;
    this.b = b;
    this.c = c;
    this.imgUrl = imgUrl;
    triviaQuestions.push(this);
};


var q1 = new NewQuestion("What fearsome animal does Copper battle in the climax of The Fox an The Hound?", "A grizzly bear", "wolf", "coyote", "dog", "../images/grizzly-bear.jpg");
var q2 = new NewQuestion("What Dinsey heroine declares, 'When I get home I shall write a book about this place.'?", "Alice", "Repunzel", "Aurora", "Belle", "../images/alice.jpg");
var q3 = new NewQuestion("In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?", "Love", "Magic", "Knowledge", "Strength", "../images/sword-in-stone.jpg");
var q4 = new NewQuestion("In Aladdin, what is the name of Jasmine’s pet tiger?", "Rajah", "Raj", "Abu", "Iago", "../images/rajah.jpg");
var q5 = new NewQuestion("Which Disney princess did not have a love interest in her film?", "Merida", "Mulan", "Tiana", "Snow White","../images/merida.jpg");
/* var q6 = new newQuestion();
var q7 = new newQuestion();
var q8 = new newQuestion();
var q9 = new newQuestion();
var q10 = new newQuestion();
var q11 = new newQuestion();
var q12 = new newQuestion();
var q13 = new newQuestion();
var q14 = new newQuestion();
var q15 = new newQuestion();
var q16 = new newQuestion();
var q17 = new newQuestion();
var q18 = new newQuestion();
var q19 = new newQuestion();
var q20 = new newQuestion();
var q21 = new newQuestion();
var q22 = new newQuestion();
var q23 = new newQuestion();
var q24 = new newQuestion();
var q25 = new newQuestion();
var q26 = new newQuestion();
var q27 = new newQuestion();
var q28 = new newQuestion();
var q29 = new newQuestion();
var q30 = new newQuestion();
var q31 = new newQuestion();
var q32 = new newQuestion();
var q33 = new newQuestion();
var q34 = new newQuestion();
var q35 = new newQuestion();
var q36 = new newQuestion();
var q37 = new newQuestion();
var q38 = new newQuestion();
var q39 = new newQuestion();
var q40 = new newQuestion();
var q41 = new newQuestion();
var q42 = new newQuestion();
var q43 = new newQuestion();
var q44 = new newQuestion();
var q45 = new newQuestion();
var q46 = new newQuestion();
var q47 = new newQuestion();
var q48 = new newQuestion();
var q49 = new newQuestion();
var q50 = new newQuestion();
*/

// make new questions and push them to array
//var qObj = {};
//var qArr = [];

//qObj.q1 = new newQuestion('question and answers');

//for (var key in qObj){
  //  qArr.push(obj[key]);
//}


// write a for loop that CREATES a new question in the loop every time it runs and pushes

//for (var i = 0; i < 50; i++){
 //   qArr.push(new newQuestion(// needs to be an element in another array

   // );
//}
