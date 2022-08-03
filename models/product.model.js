const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true },
  price: { type: Number, required: true },
  totalPrice: {type: Number, required: true},
  amount: {type: Number, required: true},
});

module.exports = mongoose.model('Product', productSchema);