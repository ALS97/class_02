'use strict';

var userName = prompt('What is your name, user?');
console.log('Welcome ' + userName);

var userSnow = prompt('Have you ever gone snowboarding?');
userSnow = userSnow.toLowerCase();

if (userSnow === 'yes' || userSnow === 'y') {
  console.log('Awesome! It is my favorite hobby.');
} else {
  console.log('You should try! It is my favorite hobby.');

}

var userTat = prompt('Do you have any tattoos?');
userTat = userTat.toLowerCase();

if (userTat === 'yes' || userTat === 'y') {
  console.log('Nice! I have 6 myself.');
} else {
  console.log('Plenty of blank space to get some!');
}

var userTrav = prompt('Have you traveled much?');
userTrav = userTrav.toLowerCase();

if (userTrav === 'yes' || userTrav === 'y') {
  console.log('I have traveled to 7 different countries!');
} else {
  console.log('There is still time! I have traveled quite a bit in my short time.');
}

var userHT = prompt('Are you local to the area originally?');
userHT = userHT.toLowerCase();

if (userHT === 'yes' || userHT === 'y') {
  console.log('Me too! I was born in Bremerton and that is where I live now!');
} else {
  console.log('Well welcome to my home state!');
}

var userTech = prompt('Do you have much experience in the tech industry?');
userTech = userTech.toLowerCase();

if (userTech === 'yes' || userTech === 'y') {
  console.log('One step ahead! The closest I got was building robots with erector sets.');
} else {
  console.log('Clean slate and no bad habits! I know very little about software, I like hardware.');
}
console.log('It was nice meeting you, ' + userName );


