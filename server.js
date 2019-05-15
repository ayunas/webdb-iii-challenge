const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.status(200).send('<h2>Welcome to the Server.  Just Sit back, relax, and enjoy the code</h2>')
})

module.exports = server;

