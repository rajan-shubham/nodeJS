# NODE JS

#### common JS Modules (cjs)
- module.exports, require() are used
- by default used by NODE JS
- Synchronous way
- non strict mode

#### ES Modules (mjs) (ESM) (ES6 Module)
- import, export are used
- by default used in React, Angular ...
- Asynchronous way also
- strict mode

1. Modules are protected by default
2. modules protects their variables and function from leaking


## -------------------------------------------------
require("./xyz.js"); // one module into another
function(){
    // All the code of the module xyz.js is run inside this function
}
###### All the code of the module is wrapped inside a function when you call require("./xyz.js"); 
###### and then runs it and this function which wraps xyz.js is callled IIFE : Immediately Invoked Function Expression
- (function (){
-    // All code of the module runs inside here
- })();

- IFFE 
1. It immediately invoked(runs) the code
2. Privacy -> Keeps variable, function safe
3. How are variables and function private in different module --> IIFE and require statement
4. How do you get access to module.exports -> Node is pssing module as a parameter to the IIFE

### require(./path)
1. Resolving the Module
- ./localpath
- .json
- node:module
- ./folderName (which contains index.js)

2. Loading the Module
- file content is loaded according to file type

3. Wrapes inside an IIFE (compile)
- (function(module, require){./xyz.js})(); --> then served to V8 Engine
- string concatination(compile) --> Module.wrapper[0] + script + Module.wrapper[1];
- const wrapper = [
    '(function (exports, require, module, __filename, __dirname){ ', '/n'});',
];

4. Evaluation
- module.exports (function returned happens)

5. Caching
- module is cached  

## s1lwc06-----------------------------------------
- JS -> synchronous, single threaded language (Blocking in nature)
- nodeJS -> event-driven architecture Asynchronous, multi threaded language (Non-Blocking in nature (means all the Asynchronous tasks is not Blocking the main thread))
- libuv is a multi-platform C library provides support fro Asynchronous I/O based on event loops.