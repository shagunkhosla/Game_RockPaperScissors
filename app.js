var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
//get computer choice
function convertword(letter)
{
  if(letter=="r") return "Rock";
  if(letter=="p") return "Paper";
  if(letter=="s") return "Scissors";
}
function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function win(userChoice,computerChoice)
{
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTml=computerScore;
  result_p.innerHTML=convertword(userChoice) + " beats " + convertword(computerChoice) + ". YOU WIN!";
  console.log("USER WINS");
  console.log(userScore);
}
function lose(userChoice,computerChoice)
{
  computerScore++;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML=convertword(computerChoice) + " beats " + convertword(userChoice) + ". YOU LOSE!";
  console.log("USER LOSES");
  console.log(computerScore);
}
function draw()
{
  result_p.innerHTML="It's a DRAW";
  console.log("DRAW");
}
//console.log(getComputerChoice());
function game(userChoice)
{
  //console.log("you clicked" + userChoice);
  const computerChoice=getComputerChoice();
  switch(userChoice+computerChoice)
  {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice,computerChoice);
    //  console.log("user wins");
      break;
    case "rp":
    case "sr":
    case "ps":
    lose(userChoice,computerChoice);
    //  console.log("user Lose");
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
    //  console.log("DRAW");
      break;
  }
}
// add event listener to rock papaer and scissors_div
function main()
{
  rock_div.addEventListener('click',function(){
    game("r");
   //console.log("rock clicked");
  })
  paper_div.addEventListener('click',function(){
    game("p");
    //console.log("paper clicked");
  })
  scissors_div.addEventListener('click',function(){
    game("s");
  //  console.log("scissors clicked");
  })
}
main();
