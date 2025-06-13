// =======================
// 🎯 JavaScript Event Listeners - NOTES
// =======================

// ✅ Event Listeners allow you to run a function when an event happens on an element (like a button click, keypress, etc).

// ✅ Syntax:
// element.addEventListener(eventType, callbackFunction);

// - element: The DOM element you want to listen to (e.g., a button, input field, etc).
// - eventType: A string representing the event (e.g., "click", "keydown", "mouseover", etc).
// - callbackFunction: The function to execute when the event occurs. (IMPORTANT: Pass the function name WITHOUT parentheses).

// ✅ Example 1: Add a click event to a button

// Get the button element (by its ID)
const myButton = document.getElementById("myButton");

// Define a function to run when the button is clicked
function sayHello() {
    console.log("Hello! You clicked the button.");
}

// Add the event listener
myButton.addEventListener("click", sayHello);

// ✅ Example 2: Using an anonymous function (when you need to pass arguments)
myButton.addEventListener("click", function() {
    console.log("This is an anonymous function!");
});

// Or using an arrow function (modern and cleaner)
myButton.addEventListener("click", () => {
    console.log("Button clicked with arrow function!");
});

// ✅ Common Event Types:
// - "click": When the element is clicked
// - "mouseover": When the mouse hovers over the element
// - "mouseout": When the mouse leaves the element
// - "keydown": When a key is pressed
// - "keyup": When a key is released
// - "submit": When a form is submitted
// - "change": When an input value changes

// ✅ Important: DO NOT ADD PARENTHESES () when passing the function name in addEventListener.
// For example, write `sayHello`, not `sayHello()`.

// ✅ If you add parentheses like this:
myButton.addEventListener("click", sayHello()); // ❌ Wrong!
// It will call the function immediately when the script runs, not when the event happens!

// ✅ You can also remove an event listener if needed using removeEventListener:
// myButton.removeEventListener("click", sayHello);

// ✅ You can add multiple event listeners to the same element if needed.


// =======================
// ✅ Summary:
// 1. Get the element
// 2. Write the function to run
// 3. Add the event listener: element.addEventListener(eventType, functionReference);
// =======================
