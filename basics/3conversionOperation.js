let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let num = Number(score); // change into number 

console.log(typeof num); 
console.log(num); // NaN 

let isLoggedIn = 1;

let booleans = Boolean(isLoggedIn);

console.log(isLoggedIn);

console.log(booleans);
console.log(typeof (booleans))

// 1 => true
// 0 => false
// "" => false
// "shaha" => true


let anyNumber = 33;
let newNumber = String(anyNumber);

console.log(anyNumber);

console.log(newNumber);
console.log(typeof newNumber);
