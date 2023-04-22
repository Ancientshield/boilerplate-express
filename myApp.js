require('dotenv').config();
let express = require('express');
let app = express();
let proc = process.env;
proc.MESSAGE_STYLE = 'uppercase';

// use middleware app.use(path, middlewareFunction) to serve static assets.
app.use('/public', express.static(__dirname + '/public'));

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
