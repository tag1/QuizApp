var answers = [{
    answerc: "The motorcycle was produced from 1894-1897, and had an engine size of 1489 cc!",
    answeri: "Heinrich and Wilhelm Hidebrand were steam-engine engineers before <br> they teamed up with Alois Wolfmüller to produce their <br> internal combustion Motorrad in Munich, Germany in 1894"
}, {
    answerc: "Countersteering is an effect where the initial steer torque <br>and steer angle are both opposite the desired turn direction.<br> This is also used by bicycles!",
    answeri: "Although it seems backwards, one would steer left to turn right. <br> This is known as <a href='http://en.wikipedia.org/wiki/Countersteering'>countersteering</a>."
}, {
    answerc: "The <a href='http://en.wikipedia.org/wiki/Adventure_touring#Types_of_dual-sports'>Adventure Touring</a> style motorcycle has seen great success over the past ten years due in no small part to their documentary.",
    answeri: "The <a href='http://en.wikipedia.org/wiki/Adventure_touring#Types_of_dual-sports'>Adventure Touring</a>, a larger version of dual-sports with added features, is the style they rode."
}, {
    answerc: "Craig Vetter's <a href='http://www.craigvetter.com/pages/Motorcycle_Designs/Streamliner.html'>Streamliner</a> was made possible with a Honda 125cc engine, and custom fairings.",
    answeri: "The Vetter <a href='http://www.craigvetter.com/pages/Motorcycle_Designs/Streamliner.html'>Streamliner</a> was able to get an amazing 470mpg(0.5 L/100km)!<br> The high fuel economy competition in the USA is still in Vetter's name!"
}, {
    answerc: "As time goes on, the price for electric motorcycles is reducing.",
    answeri: "The correct price is $9500 (€7000)."
}, ];
var questions = [{
    correctButton: 1
}, {
    correctButton: 3
}, {
    correctButton: 2
}, {
    correctButton: 1
}, {
    correctButton: 4
}];
var i = 0;
var score = 0;
var theOutro = function(score) {
    $(".getOutro").click(function() {
        $(".greybox").hide();
        $(".progress").hide();
        $(".explanation").hide();
        $(".continuewrapper").show();
        $(".outro").show();
        $(".outro").append("<h2>You got " + score +
            " out of 5 correct!</h2>");
        $(".getOutro").hide();
        $(".restart").show();
        $(".questionsAtTop").remove();
    });
    restartQuiz();
};
var startQuiz = function() {
    $(".startbutton").click(function() {
        $(".intro").fadeOut(50);
        $("#overridebootstraptop").fadeIn(2000);
        $(".greybox").fadeIn(2000);
        $("#overridebootstrapbottom").fadeIn(2000);
        $("#progressoverride").show();
    });
};
var hideCorrect = function(i, score) {
    $(".greybox").hide();
    $(".progress").hide();
    $(".explanation").show();
    $(".correct").show();
    $(".answercorrect").prepend("<p>" + answers[i].answerc + "</p>");
    $(".continuewrapper").show();
    $(".continue").click(function() {
        $(".greybox").show();
        $(".progress").show();
        $(".explanation").hide();
        $(".correct").hide();
        $(".continuewrapper").hide();
        $(".answercorrect > p").remove().val();
    });
    theOutro(score);
};
var hideWrong = function(i, score) {
    $(".greybox").hide();
    $(".progress").hide();
    $(".explanation").show();
    $(".incorrect").show();
    $(".answerincorrect").prepend("<p>" + answers[i].answeri + "</p>");
    $(".continuewrapper").show();
    $(".continue").click(function() {
        $(".greybox").show();
        $(".progress").show();
        $(".explanation").hide();
        $(".incorrect").hide();
        $(".continuewrapper").hide();
        $(".answerincorrect > p").remove().val();
    });
    theOutro(score);
};
var slideQuestions = function(i) {
    var showNext = i;
    $(".continue").click(function() {
        $(".potentialanswers > div").slideUp('slow')
        $(".potentialanswers").children(":eq(" + showNext + ")").show()
            .slideDown();
        $(".questionsAtTop > div").slideUp('slow')
        $(".questionsAtTop").children(":eq(" + showNext + ")").show()
            .slideDown();
        $("#quizCarousel").carousel('next');
        if (i >= 4) {
            $(".continue").addClass("getOutro");
            $(".continue").removeClass("continue");
        };
    });
};
var answerLoop = function() {
    $(".a1, .a2, .a3, .a4").click(function() {
        console.log(i + " is the amount of i");
        console.log($(this).index("button") + " has been clicked");
        if ($(this).index("button") === questions[i].correctButton) {
            console.log('the correct answer has been chosen!');
            score++;
            var x = $('.progress-bar').width();
            $(".progress-bar").width('+=128');
            hideCorrect(i, score);
            i++;
            slideQuestions(i);
        } else {
            console.log('this is incorrect!');
            var x = $('.progress-bar').width();
            $(".progress-bar").width('+=128');
            hideWrong(i, score);
            i++;
            slideQuestions(i);
        };
    })
};
/* New Game button */
var restartQuiz = function() {
    $(".restart").click(function() {
        window.location.reload();
    });
};
$(document).ready(function() {
    startQuiz();
    answerLoop();
    $('#quizCarousel').carousel({
        interval: false,
    });
});