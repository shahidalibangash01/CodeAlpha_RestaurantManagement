const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
    const items = await Inventory.find();
    res.json(items);

};

exports.getLowStock = async (req, res) => {
    const items = await Inventory.find({ $expr: { $lte: ['$quantity', '$threshold'] } });
    res.json({ lowStockItems: items });

};

exports.addInventoryItem = async (req, res) => {
    const item = await Inventory.create(req.body);
    res.status(201).json(item);

};

exports.updateInventory = async (req, res) => {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    };
    res.json(item);

};