customersApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/js/routes/partials/customers.html',
		controller: 'CustomersController'
	})
	$routeProvider.when('/orders', {
		templateUrl: '/js/routes/partials/orders.html',
		controller: 'OrdersController'
	})
})