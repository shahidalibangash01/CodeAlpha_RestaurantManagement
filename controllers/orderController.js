const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');
const Table = require('../models/Table');

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate('table').populate('items.menuItem');
    res.json(orders);

};

exports.placeOrder = async (req, res) => {
    const { table: tableId, items, note } = req.body;

    const table = await Table.findById(tableId);
    if (!table) {
        return res.status(404).json({ message: 'Table not found' });
    };
    let totalPrice = 0;
    const populatedItems = [];

    for (const item of items) {
        const menuItem = await MenuItem.findById(item.menuItem);
        if (!menuItem) {
            return res.status(404).json({ message: `Menu item not found: ${item.menuItem}` });
        };
        if (!menuItem.isAvailable) {
            return res.status(400).json({ message: `${menuItem.name} is not available` });
        };

        const unitPrice = menuItem.price;
        totalPrice += unitPrice * item.quantity;
        populatedItems.push({ menuItem: menuItem._id, quantity: item.quantity, unitPrice });

    }

    const order = await Order.create({ table: tableId, items: populatedItems, totalPrice, note });
    await Table.findByIdAndUpdate(tableId, { status: 'occupied' });

    res.status(201).json(order);

};

exports.updateOrderStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );
    if (!order) return res.status(404).json({ message: 'Order not found' });

    // Free table when order is paid
    if (req.body.status === 'paid') {
        await Table.findByIdAndUpdate(order.table, { status: 'available' });
    }

    res.json(order);
};

exports.getDailySales = async (req, res) => {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const end = new Date(); end.setHours(23, 59, 59, 999);

    const orders = await Order.find({ status: 'paid', createdAt: { $gte: start, $lte: end } });
    const totalSales = orders.reduce((sum, o) => sum + o.totalPrice, 0);

    res.json({ date: start.toDateString(), totalOrders: orders.length, totalSales });
    
};