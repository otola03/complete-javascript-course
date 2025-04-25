// const calculateBMI = (mass, height) => {
//     const bmi = mass / (height * height);
//     return bmi;
// }

// const markBmi = calculateBMI(78, 1.69);
// const johnBmi = calculateBMI(92, 1.95);
// const markHigherBmi = markBmi > johnBmi;

// console.log(markBmi.toFixed(2), johnBmi.toFixed(2), markHigherBmi);

// const sentence = `Mark BMI: ${markBmi.toFixed(2)}`;
// console.log(sentence);

// type conversion
// const inputYear = "2005";
// console.log(typeof(Number(inputYear)));
// console.log(typeof Nan)

// // type coercion
// console.log("first year " + 2025);


//5 falsy values: 0, '', undefined, null, NaN

// // ternary operator
// const age = 23
// const drinkAge = age >= 18 ? true : false;
// console.log(drinkAge);
// console.log(`Can you drink? -> ${age > 18 ? "Yes" : "No"}`); // cab be applied to template string

"use strict"; // activate strict mode (at the very start of the code)
/*
Why use "use strict"?
It helps catch common coding errors and "unsafe" actions by:

- Preventing the use of undeclared variables.

- Throwing errors for assignments to read-only properties.

- Disallowing duplicate parameter names in functions.

- Making "this" behave more predictably (e.g., it will be undefined in functions instead of pointing to the global object).

- Preventing use of reserved words for variable names (like let, class, if, etc.).
// */


// // function declaration
// function log(test) {
//   console.log(test);
// }
// log('test');

// // function expression
// const calcAge = function(birthYear) {
//   return 2025 - birthYear;
// }


// const years = new Array(1991, 1984, 2008, 2020, 'test');
// console.log(years);
// console.log(years.length);


// add
// const alphabet = ['a', 'b', 'c'];
// alphabet.push('d');
// console.log(alphabet);
// alphabet.unshift('start'); // add to index 0;

// // remove
// const popped = alphabet.pop(); // remove last 
// console.log(alphabet, popped);
// const shifted = alphabet.shift();
// console.log(alphabet, shifted);

// // miscellaneous
// console.log(alphabet.indexOf('b'));
// console.log(alphabet.includes('c'));


// Object
// property and value
// object literal syntax
const koh = { 
  firstName: 'Wonjoon',
  lastName: 'Koh',
  age: 22
};

console.log(koh);

console.log(koh.firstName); 
console.log(koh['firstName']);

koh['test'] = 'test'; // adding propery with bracket notation.
console.log(koh.test);

koh.gender = 'male'; // adding with dot notation
console.log(koh.gender);