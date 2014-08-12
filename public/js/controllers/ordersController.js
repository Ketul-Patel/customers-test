customersApp.controller('OrdersController', function($scope, OrderFactory, CustomerFactory) {
	OrderFactory.initialize(function() {
		CustomerFactory.initialize(function() {
			$scope.customers = CustomerFactory.getCustomers();
			$scope.orders = OrderFactory.getOrders();
			$scope.products = OrderFactory.getProducts();
		})
	})
	
	$scope.addOrder = function() {
		OrderFactory.addNewOrder($scope.new_order)
	}
	$scope.getCustomer = function(id) {
		return CustomerFactory.getCustomerById(id);
	}
})