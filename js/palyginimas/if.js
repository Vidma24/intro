/*
IF - palyginimas
sablonai:

if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}
palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ==, !=, ===, !==
NENAUDOTINI; ==, !=, 
*/

const age = 99;
const agelimit = 18;

if ( age < agelimit) {
console.log('Sorry, bet esi per jaunas...');

} else {
    console.log('Ok, uzeik ir pasismagink');
}
 
console.clear();

if (4 == 2) {
console.log('Taip, daugiau');
} else {
    console.log('Ne, maziau');
}

console.clear();

// 3variantas

const color = 'red';
let translation = '';
if (color === 'red') {
    translation = 'raudona';
} else if (color === 'blue') {
  
    translation = 'melyna';
} 
 else if (color === 'green') {
    translation = 'zalia';
} else {
    console.log('Nezinau tokios spalvos');
}

console.log('>>>', translation);




