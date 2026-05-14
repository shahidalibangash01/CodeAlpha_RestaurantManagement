const Reservation = require('../models/Reservation');
const Table = require('../models/Table');


exports.getReservations = async (req, res) => {
    const reservations = await Reservation.find().populate('table');
    res.json(reservations);

};

exports.createReservation = async (req, res) => {
    const { table: tableId, guestCount } = req.body;

    const table = await Table.findById(tableId);
    if (!table) {
        return res.status(404).json({ message: 'Table not found' });
    };
    if (table.status !== 'available') {
        return res.status(400).json({ message: 'Table is not available' });
    };
    if (table.capacity < guestCount) {
        return res.status(400).json({ message: 'Table capacity insufficient' });
    };

    const reservation = await Reservation.create(req.body);
    await Table.findByIdAndUpdate(tableId, { status: 'reserved' });

    res.status(201).json(reservation);

};

exports.cancelReservation = async (req, res) => {
    const reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        { status: 'cancelled' },
        { new: true }
    );
    if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
    };

    await Table.findByIdAndUpdate(reservation.table, { status: 'available' });
    res.json({ message: 'Reservation cancelled', reservation });
    
};
