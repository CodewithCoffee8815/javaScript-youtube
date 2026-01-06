//  Javascript is a dynamically typed language

// Primitive

/*
7:types

 String
 Number
 Boolean
 Null
 Undefiend
 Symbol
 BigInt

*/
const num = 100;
const num1 = 100.23;

const isLoggedIn = false;
const empty = null;

let userEmail;

// symbol

const id = Symbol('123');

const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(id )
console.log(anotherId)

// BigInt

let a = 126353762653276353434343n ;

console.log(typeof a);


// Non-Primitive(Reference type)
/* 
    Objects
    Array
    Functions
*/

//Array
const heros = ["Saktiman", "Spiderman", "CaptainAmerica"];

// if we want one by one output 
heros.forEach(element => {
    console.log(element);
});

// If we want output in array form

console.log( heros)

// Object

let myObj = {
    name:"shahanawaz",
    age:22,
}

console.log(myObj);

for(let key in myObj){
    console.log(key, myObj[key]);
    
}

for(let a in myObj){
    console.log(myObj[a]);
    
}
// Function

let newFunction = function(){
    console.log("Hello Function");
    
}
newFunction();

