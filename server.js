const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, './client/public')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

/* MONGOOSE */
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

const LOGIN = process.env.LOGIN;
const KEY = process.env.KEY


if(NODE_ENV === 'production') dbUri = `mongodb+srv://${LOGIN}:${KEY}@cluster0.a0lsb.mongodb.net/?retryWrites=true&w=majority`;
else if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/newWaveDBtest';
else dbUri = 'mongodb://localhost:27017/newWaveDB';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+ port);
});