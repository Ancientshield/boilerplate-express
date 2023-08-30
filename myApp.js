require('dotenv').config();
let express = require('express');
let app = express();
let proc = process.env;
proc.MESSAGE_STYLE = 'uppercase';

// use middleware app.use(path, middlewareFunction) to serve static assets.
app.use('/public', express.static(__dirname + '/public'));

// Implement a Root-Level Request Logger Middleware
// app.use 要在 app.get 上面
app.use(function middleware(req, res, next) {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

// request, response and Serve an HTML File
app.get('/', (req, res) => {
	// res.send('Hello Express');
	res.sendFile(__dirname + '/views/index.html');
});

// Serve JSON on a Specific Route
app.get('/json', (req, res) => {
	let message = 'Hello json';
	// Use the .env File
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		return res.json({ message: message.toUpperCase() });
	}
	return res.status(200).json({ message: message });
});

// Chain Middleware to Create a Time Server
app.get(
	'/now',
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({ time: req.time });
	}
);

module.exports = app;
