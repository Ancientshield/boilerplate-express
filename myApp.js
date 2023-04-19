let express = require('express');
let app = express();

// req, res
app.get('/', (req, res) => {
	res.send('Hello Express');
});

module.exports = app;
