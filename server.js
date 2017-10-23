const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


const app = express();
const port = process.env.PORT || 3300;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use("/", routes);

// app.get('/', function(req, res) {
// 	connection.query('SELECT * FROM burgers', function(err, data) {
// 		if (err) {
// 			return res.status(500).end();
// 		}

// 		res.render('index', { burgers: data });

// 	});
// });

// app.post('/burger', function(req, res) {
// 	connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.burger], function(err, result) {
// 		if (err) {
// 			return res.status(500).end();
// 		}
// 		// Send back the ID of the new burger
// 		res.json({ id: result.insertId });
// 		console.log({ id: result.insertId });

// 	});
// });

app.listen(port, function() {
	console.log('listening on port: ' + port);
});