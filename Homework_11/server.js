// TASK 1
const http = require("http");
const os = require('node:os');
const path = require('path');

let user = os.userInfo().username;
let type = os.type();
let minutes = Math.floor(os.uptime() / 60);
let directories = path.dirname(__dirname);
let filename = path.basename(__filename)

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>System information</h1>`);
    res.end(`
    <p>Current user name: ${user}</p>
    <p>OS type: ${type}</p>
    <p>System work time: ${minutes} minutes</p>
    <p>Current work directory: ${directories}</p>
    <p>Server file name: ${filename}</p>
    `);
}).listen(5000);
console.log('server running at http://127.0.0.1:5000/');


// TASK 2
const myModule = require("./personalmodule");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myModule.daytimeGreeting(user));
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');
