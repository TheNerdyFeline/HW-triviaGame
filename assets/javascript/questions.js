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


var q1 = new NewQuestion("What fearsome animal does Copper battle in the climax of The Fox an The Hound?", "Grizzly Bear", "Wolf", "Coyote", "Dog", "./assets/images/grizzly-bear.jpg");
var q2 = new NewQuestion("What Disney heroine declares, 'When I get home I shall write a book about this place.'?", "Alice", "Repunzel", "Aurora", "Belle", "./assets/images/alice.jpg");
var q3 = new NewQuestion("In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?", "Love", "Magic", "Knowledge", "Strength", "./assets/images/sword-in-stone.jpg");
var q4 = new NewQuestion("In Aladdin, what is the name of Jasmine's pet tiger?", "Rajah", "Raj", "Abu", "Iago", "./assets/images/rajah.jpg");
var q5 = new NewQuestion("Which Disney princesses did not have a love interest in her film?", "Merida and Elsa", "Mulan and Merida", "Tiana and Snow White", "Elsa and Anna", "./assets/images/merida-elsa.jpg");
var q6 = new NewQuestion("What was the last Disney movie officially overseen by Walt Disney?", "The Jungle Book", "Sleeping Beauty", "Mary Poppins", "Parent Trap", "./assets/images/junglebook-india.jpg");
var q7 = new NewQuestion("What name did Princess Aurora use to hide her identity while living in the cottage in the woods?", "Briar Rose", "Flora Rose", "Sweet Briar Rose", "Sweet Briar","./assets/images/briar-rose.jpg");
var q8 = new NewQuestion("What author wrote the book that the animated feature The Jungle Book is based on?", "Rudyard Kipling",
"Hans Christian Andersen", "A.A. Milne", "Lewis Carroll", "./assets/images/jungle-book.jpg");
var q9 = new NewQuestion("When does Mary Poppins say she will leave the Banks’ house?", "When the Wind Changes", 
"When the season changes", "After the holidays", "End of the year", "./assets/images/mary-poppins.jpg");
var q10 = new NewQuestion("What Disney movie takes place in India?", "The Jungle Book","Aladdin", "Tangled", "Treasure Island", "./assets/images/junglebook-india.jpg");
var q11 = new NewQuestion("Which two Disney princesses featured red hair?", "Ariel and Merida","Repunzel and Ariel", "Belle and Merida", "Aurora and Snow White", "./assets/images/ariel-and-merida.jpg");
var q12 = new NewQuestion("Which princess has her mother alive, but her father is dead?", "Tiana","Aurora", "Rapunzel", "Elsa", "./assets/images/tiana-and-mom.jpg");
var q13 = new NewQuestion("In the Lion King, where does Mufasa and his family live?", "Pride Rock", "Tree of Life", "The Desert", "The Outlands", "./assets/images/pride-rock.png");
var q14 = new NewQuestion("What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?", "Andy","Sid", "Lenny", "Steve", "./assets/images/buzz-andy.jpg");
var q15 = new NewQuestion("In the movie Frozen, which song does Elsa sing as she builds the castle?", "Let it Go","When Will My Life Begin?", "In Summer", "Do you want to build a Snowman?", "./assets/images/frozen-let-it-go.jpg");
var q16 = new NewQuestion("In the movie Finding Nemo, which country has Nemo been taken to?", "Australia","England", "Africa", "Pacific Coast", "./assets/images/nemo-australia.jpg");
var q17 = new NewQuestion("In which Disney movie is Hopper a villain?", "A Bug's Life","Ants", "The Jungle Book", "Zootopia", "./assets/images/hopper.jpg");
var q18 = new NewQuestion( "In which city is the Disney movie Ratatouille based?", "Paris","London", "Marseille", "Sydney", "./assets/images/paris.jpg");
var q19 = new NewQuestion("Which Disney princesses officially became princesses after they were married?", "Belle, Cinderella, and Tiana", "Cinderella and Belle", "Tiana Aurora and Merida", "Snow White and Mulan", "./assets/images/belle-cinderella-tiana.jpg");
var q20 = new NewQuestion("In Beauty and the Beast, how many eggs does Gaston eat for breakfast?", "5 Dozen", "12", "2 dozen", "36", "./assets/images/gaston-eggs.jpg");
var q21 = new NewQuestion("During the battle with Aladdin, what type of animal does Jafar transform himself into?", "Cobra","Tiger", "Bear", "Lion", "./assets/images/cobra.jpg");
var q22 = new NewQuestion( "What do Aladdin and his monkey Abu steal from the marketplace when you’re first introduced to them in the movie?", "Loaf of Bread","Apple", "Cheese", "Fish", "./assets/images/aladdin-bread.jpg");
var q23 = new NewQuestion("After being on earth, where did Hercules first meet his father Zeus?", "Temple of Zeus","Atlantis City", "Olympus Coliseum", "Prometheus Academy", "./assets/images/temple-of-zeus.png");
var q24 = new NewQuestion("Which is the only Disney animated film with a main character that doesn’t speak?", "Dumbo", "Tangled",  "101 Dalmations", "Lady and the Tramp", "./assets/images/dumbo.jpeg" );
var q25 = new NewQuestion("In Toy Story, what game does the slinky play?", "Checkers", "Go Fish", "Candyland", "jenga", "./assets/images/checkers.jpg");
var q26 = new NewQuestion("In Mary Poppins, what animal was on the end of Mary Poppins’ umbrella that spoke?", "Parrot", "Cat", "Lizard", "Snake", "./assets/images/poppins-parrot.jpg");
var q27 = new NewQuestion("What is the name of Donald Duck’s sister?", "Dumbella", "Danna", "Daphne", "Daffodil", "./assets/images/dumbella.jpg");
var q28 = new NewQuestion("What was the first fairy tale that Walt Disney made a cartoon about?", "Little Red Riding Hood", "Snow White", "The Ugle Duckling", "Pinnochio", "./assets/images/little-red-riding-hood.jpg");
var q29 = new NewQuestion("In Hercules, Hades promised not to harm Megara provided that Hercules give up his strength. How long did he have to agree to give up his strength for?", "24 Hours", "Forever", "12 hours", "1 Week",  "./assets/images/hercules.jpg");
var q30 = new NewQuestion("What actor provided the voice of Lumiere in Beauty & the Beast?", "Jerry Orbach", "Robby Benson", "Jesse Corti", "Bradley Pierce",  "./assets/images/jerry-lumiere.jpg");
/*
var q31 = new NewQuestion();
var q32 = new NewQuestion();
var q33 = new NewQuestion();
var q34 = new NewQuestion();
var q35 = new NewQuestion();
var q36 = new NewQuestion();
var q37 = new NewQuestion();
var q38 = new NewQuestion();
var q39 = new NewQuestion();
var q40 = new NewQuestion();
var q41 = new NewQuestion();
var q42 = new NewQuestion();
var q43 = new NewQuestion();
var q44 = new NewQuestion();
var q45 = new NewQuestion();
var q46 = new NewQuestion();
var q47 = new NewQuestion();
var q48 = new NewQuestion();
var q49 = new NewQuestion();
var q50 = new NewQuestion();
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
