customersApp.factory('CustomerFactory', function($http) {
	var customers = []
	var factory = {};

	factory.initialize = function(callback) {
		$http.get('/customers.json').success(function(data) {
			customers = data;
			callback();
		})
	};
	factory.addNewCustomer = function(info) {
		var newCustomer = {name: info.name}
		$http.post('/customers/create', newCustomer).success(function(data) {
			customers.push(data)
		})
	}
	factory.getCustomers = function() {
		return customers
	}
	factory.getCustomerById = function(id) {
		for (customerid in customers) {
			if(customers[customerid]._id === id) {
				return customers[customerid];
			} 
		}
	}
	factory.deleteaCustomer = function(_id) {
		var customer_to_delete = {_id: _id}
		$http.post('/customers/delete', customer_to_delete).success(function(data) {
			var id = customers.indexOf(data)
			customers.splice(id, 1)
		})
	}
	return factory;
})

