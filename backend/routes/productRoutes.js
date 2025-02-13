const express = require('express');
const { getProducts, getProductsByCategory } = require('../controllers/productController');
const router = express.Router();

router.get('/products', getProducts);
router.get('/products/category/:category', getProductsByCategory);

module.exports = router;