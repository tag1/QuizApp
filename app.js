$(document).ready(function() {

	function Question(answer1, answer2, answer3, answer4) {
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.answer3 = answer3;
		this.answer4 = answer4;

	};

	
	var firstQuestion = new Question(true, false, true, false);
	var secondQuestion = new Question(false, true, false, true);
	var thirdQuestion = new Question(true, true, true, false);
	var fourthQuestion = new Question(false, false, false, true);
	var fifthQuestion = new Question(true, false, false, false);


	var uponClick = function() {
		$(".selectbtn").click(function() {
			$(this).toggleClass("btn-success");
		}
	)};

	var clickSubmit = function() {
		$(".nextbutton").click(function() {

		}
	)};



	uponClick();
});