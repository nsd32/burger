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

app.listen(port, function() {
	console.log('listening on port: ' + port);
});