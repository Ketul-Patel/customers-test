customersApp.controller('CustomersController', function($scope, CustomerFactory) {
	CustomerFactory.initialize(function() {
		$scope.customers = CustomerFactory.getCustomers()
	})
	$scope.addCustomer = function() {
		CustomerFactory.addNewCustomer($scope.new_customer)
	}
	$scope.deleteCustomer = function(name) {
		CustomerFactory.deleteaCustomer(name)
		$scope.customers = CustomerFactory.getCustomers()
	}
	
})