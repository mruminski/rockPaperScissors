/*
- zdefiniowana liczba wygranych rund

zasady:
- ten sam ruch - REMIS
- papier wygrywa z kamieniem
- kamień wygrywa z nożycami
- nożyce wygrywają z papierem
*/

'use strict';

var output = document.getElementsByClassName('container__output');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');




rock.addEventListener('click', playerMove('rock'));
paper.addEventListener('click', playerMove('paper'));
scissors.addEventListener('click', playerMove('scissors'));