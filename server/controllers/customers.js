// friends controller that handles all of the friends functions (getting, creating, etc.)
// these functions are invoked from the routes.js file in the config folder
var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer'); // load mongoose and the Customer model
module.exports = (function() {
    return {
        customers_json: function(req, res) {
            Customer.find({}, function(err, results) {
                res.send(JSON.stringify(results))
            })
        },
        orders_json: function(req, res) {
            Customer.find({}, {orders: 1}, function(err, results) {
                res.send(results)
            })
        },
        create: function(req, res) {
            var newCustomer = new Customer(req.body);
            newCustomer.save(function(err, results) {
                res.send(JSON.stringify(results))
            })
        },
        destroy: function(req, res) {
            Customer.findOne({_id: req.body._id}, function(err, result) {
                result.remove()
                res.send(JSON.stringify(result));
            })
            
        },
        order: function(req, res) {
            Customer.update({_id: req.body._id}, {$push: {orders: req.body.order}}, function(err, result) {
                res.send({err: err, result: result})

            })
        }
    }
}());