const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
//const dotenv  = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const { protect } = require('./middleware/authMiddleware');

//dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/menu',         require('./routes/menuRoutes'));
app.use('/api/admin',        require('./routes/adminRoutes'));

// Protected (admin only)

const protectedRouter = express.Router();
protectedRouter.use(protect);
protectedRouter.use('/tables',       require('./routes/tableRoutes'));
protectedRouter.use('/reservations', require('./routes/reservationRoutes'));
protectedRouter.use('/orders',       require('./routes/orderRoutes'));
protectedRouter.use('/inventory',    require('./routes/inventoryRoutes'));
app.use('/api', protectedRouter);

app.get('/', (req, res) => res.send('Restaurant Management API Running...'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));