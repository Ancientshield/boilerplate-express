require('dotenv').config();
let express = require('express');
let app = express();
let proc = process.env;
proc.MESSAGE_STYLE = 'uppercase';

// use middleware app.use(path, middlewareFunction) to serve static assets.
app.use('/public', express.static(__dirname + '/public'));

// Mount the Logger middleware here
app.use(function middleware(req, res, next) {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

app.get('/json', (req, res) => {
	let message = 'Hello json';
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		return res.json({ message: message.toUpperCase() });
	}
	return res.status(200).json({ message: message });
});
// request, response
app.get('/', (req, res) => {
	// res.send('Hello Express');
	res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
