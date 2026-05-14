const express = require('express');
const router = express.Router();
const { getOrders, placeOrder, updateOrderStatus, getDailySales } = require('../controllers/orderController');

router.get('/',         getOrders);
router.get('/sales',    getDailySales);
router.post('/',        placeOrder);
router.put('/:id',      updateOrderStatus);

module.exports = router;