//initializes the myTimer variable
var myTimer = 120;

var intervalId;

var timer = false;

//sets the variables equal to the divs in the html file
var gameContainer = $("#game");

var resultsContainer = $("#results");

var submitButton = $("#submit");

//array of questions and answers
var questions = [{
        question: "Who was the original founder of Timely Publications, later known as Marvel Comics?",
        answers: {
            A: 'Stan Lee',
            B: 'Bob White',
            C: 'Al Green',
            D: 'Martin Goodman'
        },
        correctAnswer: 'D'
    },
    {
        question: "Which scientists were Captain American and Bucky attempting to apprehend when Bucky came to his tragic demise?",
        answers: {
            A: 'Anton Trojak',
            B: 'Jonas Harrow',
            C: 'Baron Zemo',
            D: 'Arnim Zola'
        },
        correctAnswer: ''
    },
    {
        question: "Where did Black Panther gain his degree in Physics from?",
        answers: {
            A: 'UT Austin',
            B: 'Oxford',
            C: 'Stanford',
            D: 'Cambridge'
        },
        correctAnswer: 'D'
    },
    {
        question: "What is the name given to the subatomic particles, that when ingested can turn a person into Ant - Man ?",
        answers: {
            A: 'Puny Particles',
            B: 'Pym Particles',
            C: 'Antaon Higgs',
            D: 'Anston'
        },
        correctAnswer: 'B'
    },
    {
        question: "What is Black Widow's real name?",
        answers: {
            A: 'Natasha Romanova',
            B: 'Natalie Rushman',
            C: 'Natasha Romanoff',
            D: 'Natalie Romanova'
        },
        correctAnswer: ''
    },
    {
        question: "Which Villain believes that Deadpool stole the identity Wade Wilson after killing their wife?",
        answers: {
            A: 'River',
            B: 'Agent X',
            C: 'Juggernaut',
            D: 'T-Ray'
        },
        correctAnswer: ''
    },
    {
        question: "Which character from outside of Marvel did Wolverine have a battle with?",
        answers: {
            A: 'Red Power Ranger',
            B: 'Mr. Incredible',
            C: 'Superman',
            D: 'Spock'
        },
        correctAnswer: ''
    },
    {
        question: "What type of spider bit Peter Parker, turning him into Spiderman?",
        answers: {
            A: 'Common House Spider',
            B: 'Daddy Long Legs',
            C: 'Black Widow',
            D: 'Tarantula'
        },
        correctAnswer: ''
    },
    {
        question: "Who created Ultron?",
        answers: {
            A: 'Tony Stark',
            B: 'Arnim Zola',
            C: 'Doctor Victor Von Doom',
            D: 'Black Widow'
        },
        correctAnswer: 'A'
    },
    {
        question: "What is Deadpool's real name?",
        answers: {
            A: 'Billy Brown',
            B: 'James Jones',
            C: 'Wade Wilson',
            D: 'Sean Smith',
        },
        correctAnswer: 'C'
    }
];

$(document).ready(function () {

    //on start button click, start game
    $("#start").on("click", start);


    //(call the display question function)
    //(start the timer)




    //when answer button is clicked, display correct answer




    //function to display each question


    //function to check answer and add to count of correct or incorrect answers


    //function to display score in the html


    function start() {
        if (!timer) {
            intervalId = setInterval(decrement, 1000);
            timer = true;
        }

        function stop() {
            clearInterval(intervalId);
            timer = false;
        }

        function decrement() {

            $("#timer").text("Time Remaining: " + myTimer);
            myTimer = myTimer - 1;
            if (myTimer < 1) {
                //call the function that displays the score
            }
        }
    }
})
