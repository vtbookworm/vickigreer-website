$(document).ready(function() {
  var questionText = null;
  var magicBall = {};
  magicBall.answers = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Do not count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  magicBall.answerQuestion = function(question) {
    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    console.log("You asked: " + question);
    var randomNumber = Math.random() * this.answers.length;
    var randomInteger = Math.floor(randomNumber);

    console.log("Your answer is: " + this.answers[randomInteger]);

    $("#answer").text(this.answers[randomInteger]);
    $("#answer").fadeIn(4000);

  };

  magicBall.getQuestion = function() {
    $("#answer").text = "";
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(function() {

      questionText = prompt("Please ask a YES/NO question:");
      if ((questionText != null) && (questionText != "")) {
        $("#answer").click(magicBall.answerQuestion(questionText));
      }
    }, 1000);
    
  };

  $("#answer").hide();
  $("#questionButton").click(magicBall.getQuestion);

});