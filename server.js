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
  res.json({"message": "success"})
})

module.exports = server;
