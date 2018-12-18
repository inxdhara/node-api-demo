var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const routes = require('./app/router/router.js');
routes(app);

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
	console.log('Drop and Resync with { force: false }');
});

// Create a Server
var server = app.listen(8080, function () {
	var host = server.address().address
	var port = server.address().port
})