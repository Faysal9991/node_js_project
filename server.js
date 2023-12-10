const http = require('http');
const mongoose = require('mongoose');
const app = require("./app");
const { error } = require('console');
const server = http.createServer(app);

mongoose.connect('mongodb+srv://faysaltanvir991:FaysaL1998@cluster0.5xtvayk.mongodb.net/?retryWrites=true&w=majority').then(() => server.listen(3000, 

console.log("app is running"),
)).catch((error)=>console.log(error))


