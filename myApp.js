let express = require('express');
let app = express();

// req, res
app.get('/', (req, res) => {
	res.send('Response String');
});

module.exports = app;
