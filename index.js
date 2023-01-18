
var readlineSync = require("readline-sync");
var question = readlineSync.question("What is your favorite  sports? ");
console.log("Amazing, " + question + "is a royal and luxrious sports");
count = 0;

function play(ques, answ) {
  var userInfo = readlineSync.question(ques);
  console.log(userInfo);

  if (userInfo == answ) {
    console.log("Data given is valid");
    count = count + 1;
  } else {
    console.log("Data given in invalid");
    count = count - 1;
  }

}

var quizzBank = [{
  que: "Who is 2022 f1 wdc? a. Max b. Lewis c. Alonso d. Leclerc ",
  ans: "Max"
},
{
  que: "Who is 2021 f1 wdc? a. Lewis b. Vettel c. Riccardo d. Max",
  ans: "Max"
},
{
  que: "Who won constructor championship in 2021 a. Ferrari b. Redbll c.         Mercedes",
  ans: "Mercedes"
},
{
  que: "Who is the best driver in F1? a. Ayton Sennar b. Schumacher c.           Alonso, d. Max",
  ans: "Schumacher"
},
{
  que: "How many title ALonso has in f1? a. 2, b. 3, c. 6, d. 7",
  ans: "2"
}]

for (var i = 0; i <= quizzBank.length; i++) {
  var userData = quizzBank[i];
  play(userData.que, userData.ans);
  console.log("Current count is: " + count);
  console.log("-------------------");
  if (count == 5) {
    console.log("You reached to level two " + count + "is your current score: ");
  }
  else if (count == 10) {
    console.log("You reached to level three " + count + "is your current score: ")
  }
}