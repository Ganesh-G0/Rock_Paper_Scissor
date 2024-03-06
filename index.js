import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const game = ["Rock", "Paper", "Scissor"];
let botsChoice = game[(Math.floor(Math.random() * game.length))];
// console.log(botsChoice);
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");
result.style.display = "none";
const playersPick = document.querySelector("#playersPick");
const botsPick = document.querySelector("#botsPick");
const won = document.querySelector("#won");
let playersChoice;
rock.onclick = updateRock;
paper.onclick = updatePaper;
scissor.onclick = updateScissor;

function updateRock() { playersChoice = game[0]; winner(); }
function updatePaper() { playersChoice = game[1]; winner(); }
function updateScissor() { playersChoice = game[2]; winner(); }

function winner() {
  if (playersChoice == botsChoice) {
    console.log("Draw");
    result.style.display = "block";
    playersPick.innerText = playersChoice;
    botsPick.innerText = botsChoice;
    won.innerText = "It's a Draw!"; 
    botsChoice = game[(Math.floor(Math.random() * game.length))]   
  } 
  else if ( playersChoice == game[0] && botsChoice == game[1] || 
    playersChoice == game[1] && botsChoice == game[2] || 
    playersChoice == game[2] && botsChoice == game[0] ) {
    console.log("Bot Wins");
    result.style.display = "block";
    playersPick.innerText = playersChoice;
    botsPick.innerText = botsChoice;
    won.innerHTML = "&#129302; Bot Won! &#127881;";    
    botsChoice = game[(Math.floor(Math.random() * game.length))]
  } 
  else { 
    console.log("Player Wins"); 
    result.style.display = "block";
    playersPick.innerText = playersChoice;
    botsPick.innerText = botsChoice;
    won.innerHTML = "&#128128; You Won! &#127881;";  
    botsChoice = game[(Math.floor(Math.random() * game.length))]
    confetti();
}
}