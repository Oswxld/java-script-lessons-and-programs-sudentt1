//the spread operator is written as three dots (...).
//It unpacks (or spreads) the contents of an array, object, or string into individual elements.

//ussually used with arrays, objects, and strings.
//Spread Operator Syntax

syntax 
 (...iterable)

 //Where iterable is something like an array, object, or string.

//How to Use the Spread Operator
//1️⃣ Spread in Arrays
  //combine two arrays


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combine = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

    //copy an array
let original = [10, 20, 30];
let copy = [...original];

console.log(copy); // [10, 20, 30]


   // 2️⃣ Spread in Objects
    //Combine Objects:

    let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }


//3️⃣ Spread with Strings

//Splits strings into an array of characters:

let word = "hello";
let letters = [...word];

console.log(letters); // ['h', 'e', 'l', 'l', 'o']

//4️⃣ Use in Function Arguments

function add(a, b, c) {
  return a + b + c;
}

let nums = [1, 2, 3];
console.log(add(...nums)); // 6


//5️⃣ Use in joining using other things entirey 

let username = "john";
let letter = [...username, "hello"];
let greetingswithletter = [...letter].join("-");
console.log(greetingswithletter); // j-o-h-n-h-e-l-l-o

//6️⃣ Use in copying array objects

let fruits = ["apple", "banana", "cherry"];
let vegetables = ["carrot", "broccoli", "spinach"];

let crops = [...fruits, ...vegetables, "potato"];
console.log(crops); // ['apple', 'banana', 'cherry', 'carrot', 'broccoli', 'spinach', 'potato']

