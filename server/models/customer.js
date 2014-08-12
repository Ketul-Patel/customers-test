// This is the Friend model that sets up the schema for friends as well as validates 
// called by the friends controller 
var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name:  String,
  created_at: {type: Date, default: Date.now},
  orders: [{
  	product: String,
  	quantity: String,
  	date: Date
  }],
  hidden: Boolean
});

CustomerSchema.path('name').required(true, 'Customer name cannot be blank');

mongoose.model('Customer', CustomerSchema);