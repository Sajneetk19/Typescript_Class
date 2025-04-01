"use strict";
const obj = {
    name: "John"
};
const arr = [];
console.log(obj.name.toLowerCase());
console.log(arr.length);
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
const value = Math.random() < 0.5 ? "a" : "b";
if (value === "a") {
    value;
    // ...
}
else if (value === "b") {
    // Oops, unreachable
}
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
greet("Brendan", new Date());
