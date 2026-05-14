const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  menuItem:  { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem', 
        required: true 
    },
  quantity:  { 
        type: Number, 
        required: true, 
        min: 1 
    },
  unitPrice: {
        type: Number,
        required: true 
    },

});

const orderSchema = new mongoose.Schema({
  table: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
  items: [orderItemSchema],

  totalPrice: { 
        type: Number,
        default: 0 
    },
  status: { 
    type: String, 
        enum: ['pending', 'preparing', 'served', 'paid'],
        default: 'pending'
    },
  note: { 
    type: String 
    },


}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);