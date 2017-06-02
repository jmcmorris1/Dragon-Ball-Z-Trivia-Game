// I need to create questions to ask user (6)
// I need to create possible answers to those questions
// I need to know which is the correct answer
// I need a timer for when I press start 
// I need a start button to press
// When start button is pressed I need timer to start counting down
// I need user to choose a possible answer so I need button to click on for the answer
// I need to check if answer chosen was correct or not
// If correct, I need message to appear on side saying "Correct"
// If not correct, I need message to say "Incorrect" and it will show correct answer


var panel = $("#quiz-area");
var countStartNumber = 15;

var questions = [{

    question: "How old was Goten when he first turned into a Super Saiyan?",
    answers: ["A. 10", "B. 7", "C. 6", "D. 9"],
    correctAnswer: "A. 10",
}, {

    question: "Just after Cell's defeat, what is the final wish Krillin makes with the Dragon Balls?",
    answers: ["A. A full head of hair", "B. To bring all of Cell's victims back to life", "C. To remove the bomb from inside the androids", "D. To be as strong as Goku"],
    correctAnswer: "B. To bring all of Cell's victims back to life",
}, {

    question: "Where did Goku learn Instant Transmission?",
    answers: ["A. The other world (heaven)", "B. In the Hyperbolic Time Chamber", "C. Planet Kaishin", "D. Planet Yardrat"],
    correctAnswer: "C. Planet Kaishin",
}, {

    question: "4. Which pair of Androids appeared first in the Android Saga?",
    answers: ["A. 18, 19", "B. 18, 20", "C. 17, 18", "D. 19, 20"],
    correctAnswer: "C. 17, 18",
}, {

    question: "5. Who is the only character in DBZ that has never died on the show?",
    answers: ["A. Bulma", "B. Hercule", "C. Chi Chi", "D. Gohan"],
    correctAnswer: "B. Hercule",
}, {

    question: "6. In total, how many forms does Frieza, Cell and Majin Buu have?",
    answers: ["A. 13", "B. 11", "C. 8", "D. 9"],
    correctAnswer: "A. 13",
}];

//Variable to hold setInterval
var timer;
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    countdown: function() {
        this.counter--;
        $("#counter-number").html(this.counter);
        if (this.counter === 0) {
            console.log("TIME UP");
            this.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(this.countdown.bind(this), 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },
    nextQuestion: function() {
        this.counter = window.countStartNumber;
        $("#counter-number").html(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },
    timeUp: function() {
        clearInterval(window.timer);
        $("#counter-number").html(this.counter);
        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
        } else {
            setTimeout(this.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        clearInterval(window.timer);
        panel.html("<h2>All done, heres how you did!</h2>");
        $("#counter-number").html(this.counter);
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        panel.append("<br><div class ='button'<button id='start-over'>Start Over?</button></div>");
    },
    clicked: function(e) {
        clearInterval(window.timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        } else {
            this.answeredIncorrectly();
        }
    },
    answeredIncorrectly: function() {
        this.incorrect++;
        clearInterval(window.timer);
        panel.html("<h2>Nope!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        } else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },
    answeredCorrectly: function() {
        clearInterval(window.timer);
        this.correct++;
        panel.html("<h2>Correct!</h2>");
        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        } else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },
    reset: function() {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};
// CLICK EVENTS
$(document).on("click", "#start-over", game.reset.bind(game));
$(document).on("click", ".answer-button", function(e) {
    game.clicked.bind(game, e)();
});
$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});
