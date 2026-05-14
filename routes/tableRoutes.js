const express = require('express');
const router = express.Router();
const { getTables, addTable, updateTableStatus } = require('../controllers/tableController');

router.get('/',        getTables);
router.post('/',       addTable);
router.put('/:id',     updateTableStatus);

module.exports = router;