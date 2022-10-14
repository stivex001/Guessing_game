const randomNumber = (range) => {
  return Math.floor(Math.random() * range);
}

const checkUserGuess = (randomNumber, userName) => {
  let input = Number(prompt(`${userName} Pick a number between 1 and ${range}`))
  return input === randomNumber
}

let points = 0;
let range = 2;
let stage = 1;
let userName = prompt("Kindly enter your username to get started")

while (points < 5) {
  if (checkUserGuess(randomNumber(range), userName)) {
    points++;
    range++;
    stage++;
     console.log(`congratulation you have ${points} points and You are now in Level ${stage}`)
  }
 else{
   console.log("oops!! you got it wrong, try again")
 }
}
