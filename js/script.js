/*
- zdefiniowana liczba wygranych rund

zasady:
- ten sam ruch - REMIS
- papier wygrywa z kamieniem
- kamień wygrywa z nożycami
- nożyce wygrywają z papierem
*/

'use strict';

var output = document.getElementById('container__output');
var resultOutput = document.getElementById('result');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var newGame = document.getElementById('new-game');
var userMove;
var aiMove;
var userPoints = 0;
var aiPoints = 0;

var aiTurn = function() {
  var random = Math.floor((Math.random() * 3) + 1);
  
  if (random == 1) {
    aiMove = 'paper';
  }
  else if (random == 2) {
    aiMove = 'rock';
  } else {
    aiMove = 'scissors';
  }
}

var printResult = function(userMove) {
  if (userMove == aiMove) {
    output.innerHTML = 'DRAW';
  }

  if ((userMove == 'paper') && (aiMove == 'rock')) {
    output.innerHTML = 'YOU WON: you played PAPER, computer played ROCK.';
    userPoints++;
  }

  if ((userMove == 'rock') && (aiMove == 'scissors')) {
    output.innerHTML = 'YOU WON: you played ROCK, computer played SCISSORS.';
    userPoints++;
  }

  if ((userMove == 'scissors') && (aiMove == 'paper')) {
    output.innerHTML = 'YOU WON: you played SCISSORS, computer played PAPER.';
    userPoints++;
  }

  if ((aiMove == 'paper') && (userMove == 'rock')) {
    output.innerHTML = 'COMPUTER WON: computer played PAPER, you played ROCK.';
    aiPoints++;
  }

  if ((aiMove == 'rock') && (userMove == 'scissors')) {
    output.innerHTML = 'COMPUTER WON: computer played ROCK, you played SCISSORS.';
    aiPoints++;
  }

  if ((aiMove == 'scissors') && (userMove == 'paper')) {
    output.innerHTML = 'COMPUTER WON: computer played SCISSORS, you played PAPER.';
    aiPoints++;
  }
  resultOutput.innerHTML = userPoints+' - '+aiPoints;
}

var playerMove = function(userMove) { 
  aiTurn();
  printResult(userMove);
}

rock.addEventListener('click', function() {
  playerMove('rock');
});

paper.addEventListener('click', function() {
  playerMove('paper');
});

scissors.addEventListener('click',function() {
  playerMove('scissors');
});