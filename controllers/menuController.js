const MenuItem = require('../models/MenuItem');

exports.getMenu = async(req, res) => {
    const items = await MenuItem.find({isAvaiable : true });
    res.json(items);

};

exports.addMenuItem = async(req, res) => {
    const item = await MenuItem.create(req.body);
    res.status(201).json(item);

};

exports.updateMenuItem = async(req, res) => {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
        return res.status(404).json({message: 'Item not found.'});
        
    };
    res.json(item);

};

exports.deleteMenuItem = async(req, res) => {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    
    if (!item) {
        return res.status(404).json({message: 'Item not found. '});
    }

    res.json({ message: 'Menu item deleted. '});

};