const { error } = require("console");
const crypto = require("node:crypto");

console.log("Hello World");

var a = 1314253;
var b = 32525;

// pbkdf2 : Password Based Key Derivative Function
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key is Generated");

setTimeout(() => { // call me as soon as possible
    console.log("Call me right now");
}, 0);

// Async Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, Key) => {
    console.log("Second Key is generated");
})

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);