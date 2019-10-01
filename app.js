'use strict'


var userSnow = prompt('Have you ever gone snowboarding?');
userSnow = userSnow.toLowerCase();

if (userSnow === 'yes' || userSnow === 'y') {
    console.log('Awesome! It is my favorite hobby.');
} else {
    console.log('You should try! It is my favorite hobby.');

}

var userTat = prompt('Do you have any tattoos?')
userTat = userTat.toLowerCase();

if (userTat === 'yes' || userTat === 'y') {
    console.log('Nice! I have 6 myself.');
} else {
    console.log('Plenty of blank space to get some!')
} 

var userTrav = prompt('Have you traveled much?')
userTrav = userTrav.toLowerCase();

if (userTrav === 'yes' || userTrav === 'y') {
    console.log('I have traveled to 7 different countries!');
} else {
    console.log('There is still time! I have traveled quite a bit in my short time.')
} 

