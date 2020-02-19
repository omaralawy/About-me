'use strict';
var clint = prompt('what is your name');
var score = 0;
switch (clint) {
case 'Baraah':
  alert('you are the best');
  console.log('you are the best !');
  break;
case 'shihab':
  alert('I\'m inspired by you');
  console.log('im inspired by you');
  break;
case 'Baraa':
  alert('You are really something special');
  console.log('im inspired by you');
  break;
}
function nickName() {
  var name = prompt('my nickname is otar, yes or no ?').toLowerCase();
  switch (name) {
  case 'yes':
    alert('GJ !');
    score++;
    break;
  case 'no':
    alert('wrong ');
    console.log('wrong');
    break;
  }
}
nickName();
function gaming() {
  var game = prompt('i play pubg, yes or no ?').toLowerCase();
  switch (game) {
  case 'yes':
    alert('no not all the gamer play pubg :p');
    console.log('wronge');
    break;
  case 'no':
    alert('wow');
    console.log('wow');
    score++;
    break;
  }
}
gaming();
function myAge() {
  var age = prompt('i am 20 ?').toLowerCase();
  switch (age) {
  case 'yes':
    alert('noooooo');
    console.log('wrong');
    break;
  case 'no':
    alert('GoodJob');
    console.log('GoodJob');
    score++;
    break;
  }
}
myAge();
function mySmartphone() {
  var smartphone = prompt('i use samsung ?').toLowerCase();
  switch (smartphone) {
  case 'yes':
    alert('indeed');
    console.log('indeed');
    score++;
    break;
  case 'no':
    alert('wrong');
    console.log('wrong');
    break;
  }
}
mySmartphone();
function yourOpinion() {
  var opinion = prompt('you are amazin9 ?').toLowerCase();
  switch (opinion) {
  case 'yes':
    alert('yess');
    console.log('yess');
    score++;
    break;
  case 'no':
    alert('wrongg');
    console.log('wrong');
    break;
  }
}
yourOpinion();
function myFavnum() {
  var favnum = prompt('What is my fav number out of 7 ?');
  for (var index = 0; index < 4; index++)
    if (Number(favnum) === 5) {
      alert('goof job !');
      score++;
      break;
    }
    else if (Number(favnum > 5)) {
      alert('too high');
    }
    else if (Number(favnum < 5)) {
      alert('too low');
    }
}
myFavnum();
function myFavGame() {
  var mythe = prompt('what is my fav game ?');
  var FavGame = ['Control', 'HorazonZerodawn', 'AssasinCreed', 'StarsWar'];
  for (var i = 0; i < 7; i++) {
    if (mythe === FavGame[i]) {
      console.log('indeeed');
      alert('gj')
      score++;
      break;
    }
    else {
      console.log('try again')
      alert('try again')
    }
  }
}
myFavGame();
alert('your score ' + score + ' from 7');
