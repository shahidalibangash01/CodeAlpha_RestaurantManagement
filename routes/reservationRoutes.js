const express = require('express');
const router = express.Router();
const { getReservations, createReservation, cancelReservation } = require('../controllers/reservationController');

router.get('/',         getReservations);
router.post('/',        createReservation);
router.put('/:id',      cancelReservation);

module.exports = router;