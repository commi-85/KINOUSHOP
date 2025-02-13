const axios = require('axios');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

exports.getProducts = (req, res) => {
  const filePath = path.join(__dirname, '../products.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    const products = JSON.parse(data);
    res.json(products);
  });
};

exports.getProductsByCategory = (req, res) => {
  const { category } = req.params;
  const filePath = path.join(__dirname, '../products.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    const products = JSON.parse(data);
    const filteredProducts = products.filter(product => product.category === category);
    res.json(filteredProducts);
  });
};