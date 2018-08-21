
var random_result=0;             
var losses= 0;                      
var win= 0;                      
var totalScore= 0;

var audioElement1 = new Audio("assets/audio/app-5.mp3");
var audioElement2 = new Audio("assets/audio/alarm_clock_1.wav");

//Setters
//Getters

// $(".crystal").attr('class','red');

var resetAndStart = function (){

$(".crystals").empty();

var images = [{name: "Crystal-1", src: "assets/images/blue.png", power: 0},
 {name: "Crystal-2", src: "assets/images/green.png", power: 0},
 {name: "Crystal-3", src: "assets/images/red.png", power: 0},
 {name: "Crystal-4", src: "assets/images/yellow.png", power: 0}]


random_result = Math.floor(Math.random() * 121) + 19;    
// console.log(random_result);
$("#result").html('Random Result: '+ random_result);       

// a game with 4 Crystal & random result
for(var i = 0; i < 4; i++){                   

// Every Crystal needs to have a random number 1-12
   var random = Math.floor(Math.random() * 12) + 1;

   var crystal = $("<div>");
       crystal.attr({
        "class":'crystal',
        "data-random":random 
      });

      // crystal.css({
      //   "background-image":"url('"+assets/images/bkground.jpg[i]+"')",
      //   "background-size":"cover"
      // });

    crystal.html(random);   //for hidding all crystal box number

  $(".crystals").append(crystal); 

  }

  $("#totalScore").html("Total Score: "+ totalScore);
}
resetAndStart();

// var reset = function(){

// }

//event delegation
$(document).on('click', ".crystal", function () {
 
  var num = parseInt($(this).attr('data-random'));   //turning this into a number
  totalScore += num;        //adding numbers

  $("#totalScore").html("Total Score: "+ totalScore);


  console.log(totalScore);

  if (totalScore > random_result){

    losses--;
		$("#losses").html("You Losses: " + losses);
		audioElement2.play();
    totalScore = 0;

    resetAndStart();
    // console.log("you losses!!");
  }
  else if(totalScore === random_result){
    win++;
    
		$("#win").html("You Win: " + win);
		audioElement1.play();

    totalScore = 0;
    resetAndStart();
    // console.log("you win!!");
  }
 

});

//when clicking ant CRYSTAL, it should adding with the totalScore result 
// until it equals the random result






// Speudo coding



// A new number shoukd be generate every single time we win or lost
// to those 4 crystals

// if it is not equal,then we start over(if it is grater than the random result,we decrement a lost counter)
// if it is equal,then we increment a win counter
//******************************************************************************** */

// var crystals = [{name: "Crystal-1", src: "assets/images/blue.png", power: 0},
// {name: "Crystal-2", src: "assets/images/green.png", power: 0},
// {name: "Crystal-3", src: "assets/images/red.png", power: 0},
// {name: "Crystal-4", src: "assets/images/yellow.png", power: 0}]
 
// function generateNumber(min, max) {
// 	return Math.floor(Math.random() * max) + min;
// }

// var audioElement1 = new Audio("assets/audio/app-5.mp3");
// var audioElement2 = new Audio("assets/audio/app-5.mp3");
// var target = 0;
// var wins = 0;
// var losses = 0;
// var totalScore = 0;

// $(document).ready(function() {
// 	powerUp();
	
// 	target = generateNumber(19,120);
// 	$("#targetNum").text(target);
	
// 	$("#wins").text(wins);
// 	$("#losses").text(losses);
// 	$("#totalScore").text(totalScore);
// 	$("body").on("click", ".crystalBtn", function(){
// 		totalScore += parseInt($(this).attr("data-attribute"));
// 		$("#totalScore").text(totalScore);
// 		if(totalScore === target) {
// 			wins++;
// 			$("#wins").text(wins);
// 			audioElement1.play();
// 			resetGame();
// 		} else if(totalScore > target) {
// 			losses++;
// 			$("#losses").text(losses);
// 			audioElement2.play();
// 			resetGame();
// 		}
// 	});

// 	function resetGame() {
// 		powerUp();
// 		target = generateNumber(19,120);
// 		$("#targetNum").text(target);
// 		totalScore = 0;
// 		$("#totalScore").text(totalScore);
// 	}

// 	function powerUp() {
// 		$("#image-container").empty();
// 		crystals.forEach(function(obj) {
// 	 	obj.power = generateNumber(1, 12);
// 	 	var newDiv = $("<div>");
// 	 	newDiv.addClass("col-md-3 col-sm-6 col-xs-12");
// 	 	var newBtn = $("<button>");
// 	 	newBtn.addClass("crystalBtn");
// 		newBtn.css({"width": "250px", "height": "202px"});
// 		newBtn.css({"background-image": "url("+obj.src+")"});
// 		newBtn.attr("data-attribute", obj.power);
// 		newDiv.append(newBtn);
// 		$("#image-container").append(newDiv);	
// 		});
		
// 	}
// });
