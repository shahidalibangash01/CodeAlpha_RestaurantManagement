const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

adminSchema.pre('save', async function () {
  console.log('pre save hook fired');
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

const Admin = mongoose.model('Admin', adminSchema);

mongoose.connect('mongodb://localhost:27017/restaurant_db').then(async () => {
  console.log('connected');
  try {
    const admin = new Admin({ username: 'testuser99', password: 'test123' });
    await admin.save();
    console.log('saved successfully:', admin);
  } catch (err) {
    console.log('ERROR:', err.message);
  }
  mongoose.disconnect();
});