//business logic
var userInput;
var userNumber;

var numberArr = [];

console.log();
var pingPong = function() {
for (var index = 1; index <= userNumber; index++){
  numberArr.push(index);

  numberArr.map(function(userInput) {

  if (userInput % 3 && 5 === 0) {
    userInput = "ping pong";      //returns ping pong for multiples of 3
  } else if (userInput % 5 === 0){
    userInput = "pong";           //returns pong for multiples of 5
  } else if (userInput % 3 === 0) {
    userInput = "ping";          //returns ping for multiples of 3
  } else {
    // return index;          //returns the number as it is
  }
  return userInput;
});
return;
};
};

//user interface logic
$(document).ready(function() {
  $("form#pong-number").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("input#ping-pong"));
    var result = pingPong(userInput);



    $("#result").fadeIn(3000).fadeOut(15000);
  });
});
