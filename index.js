import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const game = ["Rock", "Paper", "Scissor"];

$("#result").hide(); $("#score").hide();

let b1Score = 0;
let p1Score = 0; 
$("#botScore").text(b1Score); 
$("#playerScore").text(p1Score); 


let playersChoice; 
$("#rock").click(updateRock);
$("#paper").click(updatePaper);
$("#scissor").click(updateScissor);
function updateRock() { playersChoice = game[0]; };
function updatePaper() { playersChoice = game[1]; };
function updateScissor() { playersChoice = game[2]; };

function winner() {
  const botsChoice = game[Math.floor(Math.random() * game.length)];
  if ( playersChoice == game[1] && botsChoice == game[0] || 
    playersChoice == game[2] && botsChoice == game[1] || 
    playersChoice == game[0] && botsChoice == game[2] ) {
      p1Score++;
      $("#playerScore").text(p1Score); $("#botScore").text(b1Score); 
      $("#playersPick").text(playersChoice); $("#botsPick").text(botsChoice);
      $("#winnerIs").html("&#128128; You Won! &#127881;");confetti();
    }
    else if ( playersChoice == game[0] && botsChoice == game[1] || 
    playersChoice == game[1] && botsChoice == game[2] || 
    playersChoice == game[2] && botsChoice == game[0] ) {
      b1Score++;
      $("#playerScore").text(p1Score); $("#botScore").text(b1Score); 
      $("#playersPick").text(playersChoice); $("#botsPick").text(botsChoice);
      $("#winnerIs").html("&#129302; Bot Won! &#127881;");    
  } 
  else {
    $("#playerScore").text(p1Score); $("#botScore").text(b1Score); 
    $("#playersPick").text(playersChoice); $("#botsPick").text(botsChoice);
    $("#winnerIs").text("It's a Draw!");
  } 
  console.log("botsChoice: ", botsChoice, "your Choice: ", playersChoice) ;
  console.log("bots Wins : ", b1Score, "players Wins : ", p1Score);
}

$('.btn-group').click(() => { winner(); $('#score').show(); $("#result").show(); })

$("#toggle").click(() => {
  if ($("body").hasClass('dark-mode')) {
    $('body').removeClass('dark-mode');
    $('body').addClass('light-mode');
    $(".gg-sun").addClass('d-none'); $(".gg-moon").removeClass('d-none');
  } else {
    $('body').removeClass('light-mode');
    $('body').addClass('dark-mode');
    $(".gg-sun").removeClass('d-none'); $(".gg-moon").addClass('d-none'); 
  }
})
