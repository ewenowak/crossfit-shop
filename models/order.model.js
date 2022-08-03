const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  lName: { type: String, required: true },
  fName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: {type: String, required: true},
  cart: {type: Number, required: true},
});

module.exports = mongoose.model('Order', orderSchema);

