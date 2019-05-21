const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // If using Express  > 4.16 it's not required we can use express.json() and express.urlencoded()

const server = express();

server.set("port", process.env.PORT || 4600); // set port to environment port(dev or prod) or if not found use 4600

// These are middlewares(always executed regardless of the request type) and order is important 
server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.json()); // eg: POST: {"name":"foo","color":"red"}
server.use(bodyParser.urlencoded({extended: true})); // eg: POST: name=foo&color=red
// access param with req.body.paramName

server.listen(server.get("port"), () => { 
  console.log(`Running on port ${server.get('port')}`);
});