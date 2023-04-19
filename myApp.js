let express = require('express');
let app = express();

// req, res
app.get('/', (req, res) => {
	// res.send('Hello Express');
	res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
