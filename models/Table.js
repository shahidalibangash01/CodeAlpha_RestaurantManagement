const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const { type } = require('node:os');

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'occupied', 'reserved'],
        default: 'available',   
        lowercase: true,
    }

}, {timestamps: true});

module.exports = mongoose.model('Table', tableSchema);
