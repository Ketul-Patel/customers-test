// This is the routes file that handles all incoming requests and calls the appropriate controller functions
var customers = require('./../server/controllers/customers.js');
module.exports = function Routes(app){
	// base route
	app.get('/', function(req,res) { 
		res.render('index') 
	});
	app.get('/customers.json', function(req, res) {
		customers.customers_json(req,res)
	})
	app.get('/customers/orders.json', function(req, res) {
		customers.orders_json(req, res)
	})
	app.post('/customers/create', function(req, res) {
		customers.create(req, res)
	})
	app.post('/customers/delete', function(req, res) {
		customers.destroy(req, res)
	})
	app.post('/customers/order', function(req, res) {
		customers.order(req, res)
	})
};