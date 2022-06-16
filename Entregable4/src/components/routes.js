const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.get('/',controller.findProducts);
router.get('/:id',controller.findProductById);
router.post('/',controller.createProduct);
router.put('/:id',controller.updateProduct);
router.delete('/:id',controller.deleteProduct);
module.exports = router;