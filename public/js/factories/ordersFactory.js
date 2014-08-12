customersApp.factory('OrderFactory', function($http) {
	var orders = [];
	var products;
	var factory = {};
	factory.initialize = function(callback) {
		products = ['Nike Shoes', 'Black Belts', 'Ice Cream', 'Candy']
		$http.get('/customers/orders.json').success(function(data) {
			var initorders = [];
			for(objectid in data) {
				for(order in data[objectid].orders) {
					var orderToPush = data[objectid].orders[order];
					orderToPush.customer = data[objectid]._id
					initorders.push(orderToPush)
				}	
			}
			orders = initorders;
		})
		callback()
	}
	factory.addNewOrder = function(info) {
		var now = new Date();
		var newOrder = {product: info.product, quantity: info.quantity, date: now}
		$http.post('/customers/order', {_id: info.customer, order: newOrder}).success(function(data) {
			orders.push({customer: info.customer, product: info.product, quantity: info.quantity, date: now})
		})
	}
	factory.getProducts = function() {
		return products;
	}
	factory.getOrders = function() {
		return orders;
	}
	return factory
})