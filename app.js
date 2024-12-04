require("./xyz.js"); // one modeule into other

// import { x, calculateSum } from "./sum.js";
// const obj = require("./sum.js");
// const { x, calculateSum } = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");
const util = require("node:util");

const { x, calculateSum, calculateMultiply } = require("./calculate");

const data = require("./data.json");
console.log(data);

var name = "Shubham NodeJS";

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);

// console.log(globalThis === global);