'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { PORT } = require('./constants');
const sparql = require('./query_db');
const queryville = require('./query_ville');

const server = express();
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.set('views', path.join(__dirname, '../views'));
server.get('/sparql', function(req, res) {
	console.log('trying');
	res.render('sparql.ejs', { result: null, query: '' });
});

server.use(express.static(path.join(__dirname, '../public')));
server.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.get('/api/:ville', (req, res) => {
	queryville(req.params.ville).then(function(result) {
		res.send({ express: result });
	});
});

server.post('/sparql', function(req, res) {
	console.log(req.body.query);
	sparql.get(req.body.query).then(function(exit) {
		console.log(exit);
		res.render('sparql.ejs', { result: exit, query: req.body.query });
	});
});
