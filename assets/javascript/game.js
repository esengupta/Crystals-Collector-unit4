
var random_result;
var losses = 0;
var win = 0;
var totalScore = 0;

var audioElement1 = document.createElement("audio");
audioElement1.setAttribute("src", "assets/audio/app-5.mp3");
audioElement1.volume = 1;
var audioElement2 = document.createElement("audio");
audioElement2.setAttribute("src", "assets/audio/alarm_clock_1.wav");
audioElement2.volume = 1;

//Setters
//Getters
var crystals = [];
// $(".crystal").attr('class','red');

var resetAndStart = function () {

  totalScore = 0;
  $(".crystals").empty();

  crystals = [{ name: "Crystal-1", src: "assets/images/blue.png", power: 0 },
  { name: "Crystal-2", src: "assets/images/green.png", power: 0 },
  { name: "Crystal-3", src: "assets/images/red.png", power: 0 },
  { name: "Crystal-4", src: "assets/images/yellow.png", power: 0 }]


  random_result = Math.floor(Math.random() * 120) + 19;
  // console.log(random_result);
  $("#result").html('Random Result: ' + random_result);

  // a game with 4 Crystal & random result
  for (var i = 0; i < 4; i++) {

    // Every Crystal needs to have a random number 1-12
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<img>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random,
      "src": crystals[i].src
    });

    // crystal.css({
    //   "background-image":"url('"+assets/images/bkground.jpg[i]+"')",
    //   "background-size":"cover"
    // });

    // crystal.html(random);   //for hidding all crystal box number

    $(".crystals").append(crystal);

  }

  $("#totalScore").html(totalScore);
}
resetAndStart();

// var reset = function(){

// }

//event delegation
$(document).on('click', ".crystal", function () {

  var num = parseInt($(this).attr('data-random'));   //turning this into a number
  totalScore += num;        //adding numbers

  $("#totalScore").html("Total Score: " + totalScore);


  console.log(totalScore);

  if (totalScore > random_result) {

    losses++;
    $("#losses").html("You Losses: " + losses);
    console.log(audioElement2)
    audioElement2.play();
    totalScore = 0;

    resetAndStart();
    // console.log("you losses!!");
  }
  else if (totalScore === random_result) {
    win++;

    $("#win").html("You Win: " + win);
    audioElement1.play();

    totalScore = 0;
    resetAndStart();
    // console.log("you win!!");
  }


});

//when clicking at CRYSTAL, it should adding with the totalScore result 
// until it equals the random result






// Speudo coding



// A new number shoukd be generate every single time we win or lost
// to those 4 crystals

// if it is not equal,then we start over(if it is grater than the random result,we decrement a lost counter)
// if it is equal,then we increment a win counter
//******************************************************************************** */
