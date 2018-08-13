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
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var move;
var aiMove;

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

var printResult = function(move) {
  if (move == aiMove) {
    output.innerHTML = 'DRAW';
  }

  if ((move == 'paper') && (aiMove == 'rock')) {
    output.innerHTML = 'YOU WON: you played PAPER, computer played ROCK.';
  }

  if ((move == 'rock') && (aiMove == 'scissors')) {
    output.innerHTML = 'YOU WON: you played ROCK, computer played SCISSORS.';
  }

  if ((move == 'scissors') && (aiMove == 'paper')) {
    output.innerHTML = 'YOU WON: you played SCISSORS, computer played PAPER.';
  }

  if ((aiMove == 'paper') && (move == 'rock')) {
    output.innerHTML = 'COMPUTER WON: computer played PAPER, you played ROCK.';
  }

  if ((aiMove == 'rock') && (move == 'scissors')) {
    output.innerHTML = 'COMPUTER WON: computer played ROCK, you played SCISSORS.';
  }

  if ((aiMove == 'scissors') && (move == 'paper')) {
    output.innerHTML = 'COMPUTER WON: computer played SCISSORS, you played PAPER.';
  }
}

var playerMove = function(move) { 
  aiTurn();
  printResult(move);
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