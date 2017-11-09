//array of questions and answers
var questions = [
    {
        name: "q1",
        q: "<p class='q'>Who was the original founder of Timely Publications, later known as Marvel Comics?</p>",
            a: "<p class='answer'>Stan Lee</p>",
            b: "<p class='answer'>Bob White</p>",
            c: "<p class='answer'>Al Green</p>",
            d: "<p class='answer'>Martin Goodman</p>",
            correct: "<p class='correct'>d</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>Who paid Mac Gargan to become the Scorpion?</p>",
            a: "<p class='answer'>Felicia Hardy</p>",
            b: "<p class='answer'>The Kingpin</p>",
            c: "<p class='answer'>Norman Osborn</p>",
            d: "<p class='answer'>J. Jonah Jameson</p>",
            correct: "<p class='correct'>d</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>Where did Black Panther gain his degree in Physics from?</p>",
            a: "<p class='answer'>UT Austin</p>",
            b: "<p class='answer'>Oxford</p>",
            c: "<p class='answer'>Stanford</p>",
            d: "<p class='answer'>Cambridge</p>",
            correct: "<p class='correct'>b</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>What is the name given to the subatomic particles, that when ingested can turn a person into Ant-Man?</p>",
            a: "<p class='answer'>Puny Particles</p>",
            b: "<p class='answer'>Pym Particles</p>",
            c: "<p class='answer'>Antaon Higgs</p>",
            d: "<p class='answer'>Anston</p>",
            correct: "<p class='correct'>b</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>What is Black Widows real name?</p>",
            a: "<p class='answer'>Natasha Romanova</p>",
            b: "<p class='answer'>Natalie Rushman</p>",
            c: "<p class='answer'>Natasha Romanoff</p>",
            d: "<p class='answer'>Natalie Romanova</p>",
            correct: "<p class='correct'>a</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>What is Ghost Rider know as?</p>",
            a: "<p class='answer'>The Guardian Devil</p>",
            b: "<p class='answer'>The Spirit of Hate</p>",
            c: "<p class='answer'>The Spirit of Vengeance</p>",
            d: "<p class='answer'>The Skull</p>",
            correct: "<p class='correct'>c</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>Thor has two war goats to pull his chariot. What are their names?</p>",
            a: "<p class='answer'>Balder and Hermod</p>",
            b: "<p class='answer'>Thunder and Lightning</p>",
            c: "<p class='answer'>Ask and Embla</p>",
            d: "<p class='answer'>Toothgrinder and Toothgnasher</p>",
            correct: "<p class='correct'>d</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>The Fantastic Four have the headquarters in what building?</p>",
            a: "<p class='answer'>Star Tower</p>",
            b: "<p class='answer'>Fantastic Headquarters</p>",
            c: "<p class='answer'>Xavier Building</p>",
            d: "<p class='answer'>Baxter Building</p>",
            correct: "<p class='correct'>c</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>What was Chen Lu's profession before becoming Radioactive Man?</p>",
            a: "<p class='answer'>A spy</p>",
            b: "<p class='answer'>A nuclear physicist</p>",
            c: "<p class='answer'>A soldier</p>",
            d: "<p class='answer'>A pilot</p>",
            correct: "<p class='correct'>b</p>"
    },
    {
        name: "q1",
        q: "<p class='q'>Who did Dr.Doom go to college with?</p>",
            a: "<p class='answer'>Tony Stark</p>",
            b: "<p class='answer'>Peter Parker</p>",
            c: "<p class='answer'>Reed Richards</p>",
            d: "<p class='answer'>Bruce Banner</p>",
            correct: "<p class='correct'>c</p>"
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

});

$(document).on("click", ".answer", function () {
    selectedAnswer = $(this).text();
    console.log(selectedAnswer);
    checkAnswer();
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
