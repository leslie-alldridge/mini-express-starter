const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mock = require('./testResponse')
const server = express();

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(bodyParser.json());

//API calls
server.get("/tickets", (req, res) => {
  res.json(
    mock
  );
});

server.put('/update/:id', (req, res) => {
  console.log('We received the following ticket information for ticket', req.params.id);
  console.log(req.body);  
  res.json({"message": "success"})
})

module.exports = server;
