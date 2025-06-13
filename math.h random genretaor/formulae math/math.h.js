//Math = built in oject that provides a collection of propertes and methods for mathematical constants and functions

//Math.random() returns a floating-point, pseudo-random number in the range from 0 (inclusive) to 1 (exclusive)

Math.random() // returns a random number between 0 and 1

// Math.random() * (max - min) + min returns a random number between min and max

//t get a ranndom numer between 1 and six while eliminating the decimal part we use the following formula
Math.floor(Math.random() * 6) + 1 // returns a random number between 1 and 6

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) )+ min;
}