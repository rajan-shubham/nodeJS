const http = require("node:http");

const server = http.createServer(function (req, res){
    if(req.url === "/getSecretData") {
        res.end("shiv aaj bhi guru hai");
    }
    res.end("Hello from Shubham Rajan");
});

server.listen(3321);