const Table = require('../models/Table');

exports.getTables = async (req, res) => {
  const tables = await Table.find();
  res.json(tables);

};

exports.addTable = async (req, res) => {
  const table = await Table.create(req.body);
  res.status(201).json(table);

};

exports.updateTableStatus = async (req, res) => {
  const table = await Table.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  if (!table) {
        return res.status(404).json({ message: 'Table not found' });
    }
  res.json(table);

};