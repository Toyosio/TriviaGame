var myTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);
    var t = 121;

    function myClock() {
        document.getElementById("timer").innerHTML = --t;
        if (t == 0) {
            clearInterval(myTimer);
            alert("TIME IS UP! LET'S SEE HOW YOU DID");

            function generateGame(questions, gameContainer, resultsContainer, submitButton) {

                    var questions = [
                        {
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
                    function showQuestions(questions, gameContainer) {
                        var output = [];
                        var answers;

                        for (var i = 0; i < questions.length; i++) {
                            answers = [];
                            for (letters in questions[i].answers) {
                                answers.push(
                                    '<label>'
                                    +
                                    '<input type="radio name"question' + i + '"value="' + letter + '">'
                                    + letter + ': '
                                    + questions[i].answers[letter]
                                    + '</label>'
                                );
                            }

                            output.push(
                                '<div class="question">' + questions[i].question + '</div>' +
                                '<div class="answers">' + answers.join('') + '</div>'
                            );
                        }

                        gameContainer.innerHTML = output.join('');
                    }
                    showQuestions(questions, gameContainer);

                    function showResults(questions, gameContainer, resultsContainer) {

                        var resultsContainers = gameContainer.querySelectorAll('.answers');

                        var userAnswer = '';
                        var numCorrect = 0;

                        for (var i = 0; i < questions.length; i++) {
                            userAnswer = (resultsContainers[i].querySelector('input[name=question' + i + ']:checked') || {}.value);
                            if (userAnswer === questions[i].correctAnswer) {
                                numCorrect++;
                                answerContainers[i].style.color = 'purple';
                            } else {
                                answerContainers[i].style.color = 'red';
                            }
                        }
                        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
                    }
                    submitButton.onclick = function () {
                        showResults(questions, gameContainer, resultsContainer);
                    }

                    var gameContainer = document.getElementById('game');

                    var resultsContainer = document.getElementById('results');

                    var submitButton = document.getElementById('submit');

                    generateGame(questions, gameContainer, resultsContainer, submitButton);

                }
            }
        }
    }