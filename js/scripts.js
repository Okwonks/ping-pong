//business logic
var numberArr = [];
for (var index = 1; index <= input; index++){
  numberArr.push(index)
}

numberArr.map(function(num) {
  if (num % 3 && 5 === 0) {
    num = "ping pong";      //returns ping pong for multiples of 3
  } else if (num % 5 === 0){
    num = "pong";           //returns pong for multiples of 5
  } else if (num % 3 === 0) {
    num = "ping";          //returns ping for multiples of 3
  } else {
    return index;          //returns the number as it is
  }

})

//user interface logic
$(document).ready(function() {
  $("form#pong-number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#ping-pong"));
    var result = numberArr(num);
  })
  $("#result").fadeIn(3000).fadeOut(15000);
})
