const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200).send('Hello Express.js');	
});

app.get('/hello', (req, res) => {
	res.status(200).send('Hello stranger !');	
});

app.get('/hello/:name', (req, res) => {
	res.status(200).send(`Hello, ${req.params.name}!`);	
});

app.all('/sub/*', (req, res) => {
	let uri = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.status(200).json(`You requested URI: ${uri}`);
});

app.post('/post', 
	// middleware
	(req, res, next) => {
		if(req.headers["key"]) {
			next();
		} else {
			res.status(401).end();
		}
	},
	// controller
	(req, res) => {
		if(Object.keys(req.body).length == 0) { // check for empty ( {} ) POST object
			res.status(404).send('404 Not Found');
		} else {
			res.status(200).json(req.body);
		}
	}
);

app.listen(port);
console.log('Listening Express on port ' + port);
