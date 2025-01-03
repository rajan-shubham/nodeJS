const fs = require("fs");
const crypto = require("crypto");

// as the size of thread pool default is 4 in libuv

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("1 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("2 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("3 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("4 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("5 - cryptoPBKDF2 done");
});

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
});