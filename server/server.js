'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const {PORT} = require('./constants');

const server = express();
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));

server.use(express.static(path.join(__dirname, '../public')));
server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});