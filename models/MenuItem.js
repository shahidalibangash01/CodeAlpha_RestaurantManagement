const mongoose = require('mongoose');
const { type } = require('node:os');
const { describe } = require('node:test');

const menuItemSchema = new mongoose.Schema({
    name : {
        type: String ,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['Starter', 'Main Course', 'Dessert', 'Beverage'],
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    }
},{timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);