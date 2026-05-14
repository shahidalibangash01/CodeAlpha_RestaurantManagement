const express = require('express');
const router = express.Router();
const { getInventory, getLowStock, addInventoryItem, updateInventory } = require('../controllers/inventoryController');

router.get('/',         getInventory);
router.get('/low',      getLowStock);
router.post('/',        addInventoryItem);
router.put('/:id',      updateInventory);

module.exports = router;