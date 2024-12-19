console.log("Hello World");

var a = 1314253;
var b = 32525;

// This callback will only be pushed to call stack in v8 once the call stack is empty
// it will only be called once call stack of main thread is empty
setTimeout(() => {
    console.log("Call me right now");
}, 0); // Trust issues with setTimeout

setTimeout(() => {
    console.log("Call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is :", c);