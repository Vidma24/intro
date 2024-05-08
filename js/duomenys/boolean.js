 /* 
BOOLEAN - logines reiksmes

- true
- false
- kintamojo pavadinima rasome klausimo forma (is to galime suprasti jog turim reikalu su boolean), "is", "has"
 - BOOLEAN logikos operatoriai:
 - && (and)
 - || (or)
 - ! (not)



*/

const username = 'Jonas';
const age = 46;
const issunshining = true;
const hasfuel = false;

console.log(issunshining);
console.log(hasfuel);

console.log ('Kaip nenaudoti:', true + true);
console.log('Kaip nenaudoti:', true + false);

console.log('-----------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Vaikinas
// kada eisiu i pasimatyma
//- turi buti grazus
//- turi buti jaunas
//- turi buti turtingas

const isbeautiful = false;
const isyoung = false;
const isrich = false;

const willIgo = isbeautiful || isyoung || isrich;
console.log('>>>', willIgo);

console.log(!true);
console.log(!false);
console.clear();


console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log(true && false && false && false);
console.log(true && false && true && false);
console.log(true && false && false && true);
console.log(true && true && false && false);


console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && false);
console.log(true || false && false && false);
console.log(false || false && false && false);
console.log(false || false && false && true);
console.log(false || false && true && true);
console.log(false || true && true && true);

console.log(true || true || true && true);
console.log(true || true || true && false);
console.log(true || true || false && false);
console.log(true || false || false && false);
console.log(false || false || false && false);
console.log(false || false || false && true);
console.log(false || false || true && true);
console.log(false || true || true && true);

console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || false);
console.log(true || false || false || false);
console.log(false || false || false || false);
console.log(false || false || false || true);
console.log(false || false || true || true);
console.log(false || true || true || true);

console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || false);
console.log(true && false || false || false);
console.log(false && false || false || false);
console.log(false && true || true || true);
console.log(false && false || true || true);
console.log(false && false || false || true);

console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || false);
console.log(true && false && false || false);
console.log(false && false && false || false);
console.log(false && true && true || true);
console.log(false && false && true || true);
console.log(false && false && false || true);

console.log(true && true || true && true);
console.log(true && true || true && false);
console.log(true && true || false && false);
console.log(true && false || false && false);
console.log(false && false || false && false);
console.log(false && true || true && true);
console.log(false && false || true && true);
console.log(false && false || false && true);

console.log(true || true && true || true);
console.log(true || true && true || false);
console.log(true || true && false || false);
console.log(true || false && false || false);


console.log(false && false && false && false);
console.log(false && false && false && true);
console.log(false && false && true && false);
console.log(false && true && false && false);
console.log(false && false && true && true);
console.log(false && true && true && false);
console.log(false && true && true && true);
console.log(false && true && false && true);




