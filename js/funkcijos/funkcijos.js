/*
Function - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijospavadinimas() {
}

const a = funkcijospavadinimas();

console.log(a);

function empty() {
return undefined;
}

console.log(empty());

function giveMefive() {
return 5;
}
console.log(giveMefive());

/*
Imput:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!

*/
function intro(name, lastname) {
    return 'Laba diena, as esu ' + name + ' ' +  lastname + '!';

}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte' , 'Marytaite'));
/*
Input
- pirmas skaicius = 5
- antras skaicius = 7

Output
35
*/

function mulitply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(mulitply(5, 7));
console.log(mulitply(-2, 8));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus.
function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item +'.';
}
console.log(iLike('Jonas'));
console.log(iLike('Maryte', 88));
console.log(iLike('Jonas', 99, 'cepelinus'));

function price(value) {
const PVM = 21;
const priceincrease =  1 + PVM / 100;
const priceforsale = value * priceincrease; 
 
return priceforsale;
}

console.log(price(100));
console.log(price(150));

function wordss(w1, w2, w3) {
let sentence = 'Dictionary: ';
sentence += w1;
sentence += ' , ';
sentence += w2;
sentence += ' , ';
sentence += w3;
sentence += ' . ';   
return sentence;
}

console.log(wordss('labas', 'rytas' , 'Lietuva'));

// As esu Vidmantas Garbus.Man yra 37 metai.



const name2 = 'Vidmantas';
const surname1 = 'Garbus';
const sdate = 2024;
const gdate = 1987;
const age = sdate - gdate;

console.log(age);

const sentence = 'As esu Vidmantas Garbus. Man yra 37 metai.';

console.log(sentence);




