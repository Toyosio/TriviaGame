var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    var t = 31;

    function myClock() {
        document.getElementById("timer").innerHTML = --t;
        if (t == 0) {
            clearInterval(myTimer);
            alert("TIME IS UP! LET'S SEE HOW YOU DID");
        }
    }
}

const gameContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');