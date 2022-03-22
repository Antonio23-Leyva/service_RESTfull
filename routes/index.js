const express = require('express');
const useModel = require('../controllers/products');
const router = express.Router();


router
    .route('/')
    .get(useModel.getProducts)
    .post(useModel.addProduct);

router
    .route('/:id')  
    .delete(useModel.deleteProduct)
    .put(useModel.updateProduct);

module.exports = router;