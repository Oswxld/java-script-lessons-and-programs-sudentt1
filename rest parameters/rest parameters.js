//rest parameters = allows us to pass an indefinite number of arguments to a function
// bundles them into an array
// syntax: (...args) where args is an array of arguments

//Rest parameters let you gather all the extra arguments into an array when you call a function.

function introduceFriends(personName, ...freindsNames) {
    console.log(`${personName} has freinds named ${freindsNames.join(", ")}`);
    
}

introduceFriends("Oswald","Sarah", "Bob", "Alice");


/*🎯// let num of numbers //— What’s That?
T

his is a special loop in JavaScript called the for...of loop.

It’s a way to iterate (go through) each element in an iterable (like an array, string, or set).

🔥 The Syntax:
javascript
Copy code
for (let item of iterable) {
  // code that runs for each item
}
let item is a variable that holds the current element in each loop.

iterable is a collection (like an array) you're looping through.

🧪 Example with Numbers:
Let’s say we have an array:

javascript
Copy code
let numbers = [10, 20, 30, 40];
If you write:

javascript
Copy code
for (let num of numbers) {
  console.log(num);
}
✅ It will loop through the numbers array and print each number:

Copy code
10
20
30
40
 */


function calculateAverage(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  let average = total / numbers.length;
  console.log(`The average is: ${average}`);
}






