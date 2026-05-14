const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  customerName:  {
        type: String, 
        required: true 
    },
  customerPhone: { 
        type: String, 
        required: true 
    },
  table:  { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table', 
        required: true 
    },
  date: { 
        type: Date, 
        required: true 
    },
  guestCount: { 
        type: Number, 
        required: true 
    },
  status: { 
        type: String, 
        enum: ['confirmed', 'cancelled', 'completed'], 
        default: 'confirmed' 
    },

}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);