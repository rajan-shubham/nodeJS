const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1314253;
var b = 32525;

// Synchronous
fs.readFileSync("./file.txt", "utf-8");
console.log("Sync file read function end.");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfuly");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File Data : ", data);
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);