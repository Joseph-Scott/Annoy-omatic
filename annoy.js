// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("YAY, we made it!");

// if(answer === "yes") {
// 	alert("YAY, we made it!");
// } else {
// }

// VERSION 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
var answer = prompt("Are we there yet?");
}

alert("YAY, we made it!");