'use strict';
var score = 0;

function userName(userName){
  //console.log('Welcome ' + userName);
  alert('Welcome ' + userName);
}
userName(prompt('What is your name, user?'));

var userSnow = prompt('Have you ever gone snowboarding?');
userSnow = userSnow.toLowerCase();

if (userSnow === 'yes' || userSnow === 'y') {
  //console.log('Awesome! It is my favorite hobby.');
  alert('Awesome! It is my favorite hobby.');
  score++;
} else {
  //console.log('You should try! It is my favorite hobby.');
  alert('You should try! It is my favorite hobby.');

}

var userTat = prompt('Do you have any tattoos?');
userTat = userTat.toLowerCase();

if (userTat === 'yes' || userTat === 'y') {
  //console.log('Nice! I have 6 myself.');
  alert('Nice! I have 6 myself.');
  score++;
} else {
  //console.log('Plenty of blank space to get some!');
  alert('Plenty of blank space to get some!');
}

var userTrav = prompt('Have you traveled much?');
userTrav = userTrav.toLowerCase();

if (userTrav === 'yes' || userTrav === 'y') {
  //console.log('I have traveled to 7 different countries!');
  alert('I have traveled to 7 different countries!');
  score++;
} else {
  //console.log('There is still time! I have traveled quite a bit in my short time.');
  alert('There is still time! I have traveled quite a bit in my short time.');
}

var userHT = prompt('Are you local to the area originally?');
userHT = userHT.toLowerCase();

if (userHT === 'yes' || userHT === 'y') {
  //console.log('Me too! I was born in Bremerton and that is where I live now!');
  alert('Me too! I was born in Bremerton and that is where I live now!');
  score++;
} else {
  //console.log('Well welcome to my home state!');
  alert('Well welcome to my home state!');
}

var userTech = prompt('Do you have much experience in the tech industry?');
userTech = userTech.toLowerCase();

if (userTech === 'yes' || userTech === 'y') {
  //console.log('One step ahead! The closest I got was building robots with erector sets.');
  alert('One step ahead! The closest I got was building robots with erector sets.');
  score++;
} else {
  //console.log('Clean slate and no bad habits! I know very little about software, I like hardware.');
  alert('Clean slate and no bad habits! I know very little about software, I like hardware.');
}
//console.log('It was nice meeting you, ' + userName );
alert('It was nice meeting you, ' + userName);

var userNumber = 46;
for (var i = 0; i < 4; i++) {
  var userGuess = prompt('Pick a number between 1-50');
  userGuess = parseInt(userGuess);
  if (userGuess === userNumber){
    alert('Correct! The number is 46!');
    score++;
    break;
  } if (userGuess>userNumber){
    alert('Too High!!');
  } if(userGuess<userNumber){
    alert('Too Low!!');
  }


}
var Food = ['sushi','pizza', 'burgers'];
for(var t=0; t< 5; t++){
  var userFood = prompt('what do you think my favorite food is?');
  console.log('userFood' , userFood);
  userFood = userFood.toLowerCase;
  var isCorrect = false;
  for (var x = 0; x<Food.length; x++){
    if(userFood === Food[x]){
      isCorrect = true;
      alert('Correct! I enjoy Sushi, Pizza and Burgers!');
      score++;
      break;
    }

  }
  if (isCorrect){
    break;}

  alert('Try again!');

}



alert('You got ' + score + 'correct!');







