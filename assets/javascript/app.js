//array of questions and answers
var questions = [
    {
        name: "q1",
        q: "<p class='q'>Who was the original founder of Timely Publications, later known as Marvel Comics?</p>",
            a: "<p class='answer'>Stan Lee</p>",
            b: "<p class='answer'>Bob White</p>",
            c: "<p class='answer'>Al Green</p>",
            d: "<p class='answer'>Martin Goodman</p>",
            correct: "d"
    },
    {
        name: "q1",
        q: "<p class='q'>Which scientists were Captain American and Bucky attempting to apprehend when Bucky came to his tragic demise?</p>",
            A: "<p class='answer'>Anton Trojak</p>",
            B: "<p class='answer'>Jonas Harrow</p>",
            C: "<p class='answer'>Baron Zemo</p>",
            D: "<p class='answer'>Arnim Zola</p>",
            correct: "a"
    },
    {
        name: "q1",
        q: "<p class='q'>Where did Black Panther gain his degree in Physics from?",
            A: "<p class='answer'>UT Austin</p>",
            B: "<p class='answer'>Oxford</p>",
            C: "<p class='answer'>Stanford</p>",
            D: "<p class='answer'>Cambridge</p>",
            correct: "d"
    },
    {
        name: "q1",
        q: "<p class='q'>What is the name given to the subatomic particles, that when ingested can turn a person into Ant - Man ?</p>",
            A: "<p class='answer'>Puny Particles</p>",
            B: "<p class='answer'>Pym Particles</p>",
            C: "<p class='answer'>Antaon Higgs</p>",
            D: "<p class='answer'>Anston</p>",
            correct: "a"
    },
    {
        name: "q1",
        q: "<p class='q'>What is Black Widows real name?</p>",
            A: "<p class='answer'>Natasha Romanova</p>",
            B: "<p class='answer'>Natalie Rushman</p>",
            C: "<p class='answer'>Natasha Romanoff</p>",
            D: "<p class='answer'>Natalie Romanova</p>",
            correct: "d"
    },
    {
        name: "q1",
        q: "<p class='q'>Which Villain believes that Deadpool stole the identity Wade Wilson after killing their wife?</p>",
            A: "<p class='answer'>River</p>",
            B: "<p class='answer'>Agent X</p>",
            C: "<p class='answer'>Juggernaut</p>",
            D: "<p class='answer'>T-Ray</p>",
            correct: "c"
    },
    {
        name: "q1",
        q: "<p class='q'>Which character from outside of Marvel did Wolverine have a battle with?</p>",
            A: "<p class='answer'>Red Power Ranger</p>",
            B: "<p class='answer'>Mr. Incredible</p>",
            C: "<p class='answer'>Superman</p>",
            D: "<p class='answer'>Spock</p>",
            correct: "c"
    },
    {
        name: "q1",
        q: "<p class='q'>What type of spider bit Peter Parker, turning him into Spiderman?</p>",
            A: "<p class='answer'>Common House Spider</p>",
            B: "<p class='answer'>Daddy Long Legs</p>",
            C: "<p class='answer'>Black Widow</p>",
            D: "<p class='answer'>Tarantula</p>",
            correct: "c"
    },
    {
        name: "q1",
        q: "<p class='q'>Who created Ultron?</p>",
            A: "<p class='answer'>Tony Stark</p>",
            B: "<p class='answer'>Arnim Zola</p>",
            C: "<p class='answer'>Doctor Victor Von Doom</p>",
            D: "<p class='answer'>Black Widow</p>",
            correct: "a"
    },
    {
        name: "q1",
        q: "<p class='q'>What is Deadpools real name?</p>",
            A: "<p class='answer'>Billy Brown</p>",
            B: "<p class='answer'>James Jones</p>",
            C: "<p class='answer'>Wade Wilson</p>",
            D: "<p class='answer'>Sean Smith</p>",
            correct: "c"
    }
];

var selectedAnswer;
var correctAnswer = "";
var right = 0;
var wrong = 0;
var blank = 0;
var timesUp = 0;
var total = questions.length;
var timeForEach = 21; //start timer for 20 seconds
var intervalId;
var timerRunning = false;
var i = 0;

//start game, load question
$(document).ready(function () {

    //Start when button clicked
    //change div to display q 1
    $("#start").on("click", function () {
        pickAquestion();
        $("#start").html(" ");
    });

    $(document).on("click", ".answer", function () {
        selectedAnswer = $(this).text();
        console.log(selectedAnswer);
        checkAnswer();
    });
});



//checks answer and chooses next question

function pickAquestion() {
    console.log(i);
    run();
    $("#q1").html(questions[i].q);
    $("#a1").html(questions[i].a);
    $("#a2").html(questions[i].b);
    $("#a3").html(questions[i].c);
    $("#a4").html(questions[i].d);
    correct = questions[i].correct;
    if (i === questions.length - 1) {
        scoreGame();



    }
}

function checkAnswer() {
    if (selectedAnswer === questions[i].correct) {
        right += 1;
        i += 1;
        resetTimer();
        pickAquestion();

    } else if (selectedAnswer != correct) {
        wrong += 1;
        i += 1;
        resetTimer();
        pickAquestion();

    } else {
        blank += 1;
        i += 1;
        resetTimer();
        pickAquestion();
    }
}

//timer

function run() {
    if (!timerRunning) {
        intervalId = setInterval(decrement, 1000);
        timerRunning = true;
    }
}


function stop() {
    clearInterval(intervalId);
    clockRunning = false;
}

function resetTimer() {
    timeForEach = 21;
}

function decrement() {
    timeForEach = timeForEach - 1;
    $("#timer").html("Time Left: " + timeForEach);

    if (timeForEach < 1) {
        timesUp += 1;
        i += 1;
        resetTimer();
        pickAquestion();
    }
}

function scoreGame() {
    stop();
    $("#timer").html("");
    $("#q1").html("Time Up Lets See How You Did");
    $("#a1").html("Correct: " + right);
    $("#a2").html("Incorrect: " + wrong);
    $("#a3").html("Unanswered: " + blank);
    $("#a4").html("");

}
