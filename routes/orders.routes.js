const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders', async (req, res) => {
  try {
    const {fName, lName, email, phone, address, zipCode, cart} = req.body;
    const newOrder = new Order({
      fName: fName,
      lName: lName,
      phone: phone,
      email: email,
      phone: phone,
      address: address,
      zipCode: zipCode,
      cart: cart,
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;