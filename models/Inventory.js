const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName:  { 
        type: String, 
        required: true, 
        unique: true 
    },
  quantity: {
        type: Number, 
        required: true 
    },
  unit: { 
        type: String, 
        required: true 
    },   // e.g., kg, litre, pcs
  threshold: { 
        type: Number, 
        required: true 
    },   // low-stock alert level


}, { timestamps: true });


module.exports = mongoose.model('Inventory', inventorySchema);