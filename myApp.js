let express = require('express');
let app = express();

// use middleware app.use(path, middlewareFunction) to serve static assets.
app.use('/public', express.static(__dirname + '/public'));

// request, response
app.get('/', (req, res) => {
	// res.send('Hello Express');
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
	let message = 'Hello json';
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		return res.json({ message: message.toUpperCase() });
	}
	return res.status(200).json({ message: message });
});

module.exports = app;
