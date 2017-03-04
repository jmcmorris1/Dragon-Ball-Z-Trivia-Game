var question1 = {
	ques:"1. How old was Goten when he first turned into a Super Saiyan?",
	ans: ["A. 10","B. 7","C. 6","D. 9"],
	correctans: 1
};

var question2 = {
	ques:"2. Just after Cell's defeat, what is the final wish Krillin makes with the Dragon Balls?",
	ans: ["A. A full head of hair", "B. To bring all of Cell's victims back to life", "C. To remove the bomb from inside the androids", "D. To be as strong as Goku"],
	correctans: 2
};

var question3 = {
	ques: "3. Where did Goku learn Instant Transmission?",
	ans: ["A. The other world (heaven)", "B. In the Hyperbolic Time Chamber", "C. Planet Kaishin", "D. Planet Yardrat"],
	correctans: 3
};

var question4 = {
	ques: "4. Which pair of Androids appeared first in the Android Saga?",
	ans: ["A. 18, 19", "B. 18, 20", "C. 17, 18", "D. 19, 20"],
	correctans: 3
};

var question5 = {
	ques: "5. Who is the only character in DBZ that has never died on the show?",
	ans: ["A. Bulma", "B. Hercule", "C. Chi Chi", "D. Gohan"],
	correctans: 1
};

var question6 = {
	ques: "6. In total, how many forms does Frieza, Cell and Majin Buu have?",
	ans: ["A. 13", "B. 11", "C. 8", "D. 9"],
	correctans: 1
};

var questions = [question1, question2, question3, question4, question5, question6];
var time= 45;
,
$(document).ready(function()
$("#start-button").ready(function()

    $("#start-button").on("click", start); 
    $("#results-button").on("click", answers);  
    $("#rematch-button").on("click", restart); 

     function start(){
    	counter = setInterval(timer, 45000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#results");

	function increment() {
		time--
		$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
		if (time == 0) {
		timeout();
		stop();
		
