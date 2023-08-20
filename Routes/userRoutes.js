const express = require('express');
const router = express.Router();
const productControl = require('../Controller/productsController');

router.get('/products', (req, res) => {
    const products = productControl.AllProducts();
    res.send(products)
})

router.get('/oneProduct/:id', (req, res) => {
    const oneProduct = productControl.prodById()
    res.send(oneProduct)
})

module.exports = router;

