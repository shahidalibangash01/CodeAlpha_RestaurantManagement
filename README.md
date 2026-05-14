# Restaurant Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![License](https://img.shields.io/badge/Internship-CodeAlpha-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

A backend REST API for managing restaurant operations including menu, orders, tables, reservations, inventory, and admin authentication. Built with Node.js, Express.js, and MongoDB.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

---

## Project Structure

```
CodeAlpha_RestaurantManagement/
├── config/
│   └── db.js
├── controllers/
│   ├── adminController.js
│   ├── menuController.js
│   ├── orderController.js
│   ├── tableController.js
│   ├── reservationController.js
│   └── inventoryController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   ├── Admin.js
│   ├── MenuItem.js
│   ├── Order.js
│   ├── Table.js
│   ├── Reservation.js
│   └── Inventory.js
├── routes/
│   ├── adminRoutes.js
│   ├── menuRoutes.js
│   ├── orderRoutes.js
│   ├── tableRoutes.js
│   ├── reservationRoutes.js
│   └── inventoryRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string

### Installation

```bash
git clone https://github.com/shahidalibangash01/CodeAlpha_RestaurantManagement
cd CodeAlpha_RestaurantManagement
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/restaurant_db
JWT_SECRET=your_secret_key_here
```

### Run the Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

---

## API Reference

### Admin

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/admin/register` | Public | Register a new admin |
| POST | `/api/admin/login` | Public | Login and get token |

### Menu

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/menu` | Public | Get all available menu items |
| POST | `/api/menu` | Public | Add a new menu item |
| PUT | `/api/menu/:id` | Public | Update a menu item |
| DELETE | `/api/menu/:id` | Public | Delete a menu item |

### Tables

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/tables` | Admin | Get all tables |
| POST | `/api/tables` | Admin | Add a new table |
| PUT | `/api/tables/:id` | Admin | Update table status |

### Reservations

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/reservations` | Admin | Get all reservations |
| POST | `/api/reservations` | Admin | Create a reservation |
| PUT | `/api/reservations/:id` | Admin | Cancel a reservation |

### Orders

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/orders` | Admin | Get all orders |
| POST | `/api/orders` | Admin | Place a new order |
| PUT | `/api/orders/:id` | Admin | Update order status |
| GET | `/api/orders/sales` | Admin | Get daily sales report |

### Inventory

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/inventory` | Admin | Get all inventory items |
| GET | `/api/inventory/low` | Admin | Get low stock alerts |
| POST | `/api/inventory` | Admin | Add an inventory item |
| PUT | `/api/inventory/:id` | Admin | Update an inventory item |

---

## Authentication

Protected routes require a Bearer token in the Authorization header:

```
Authorization: Bearer <your_token>
```

Get the token by registering or logging in via `/api/admin/register` or `/api/admin/login`.

---

## Key Features

- Menu management with category and availability control
- Table management with real-time status tracking (available, occupied, reserved)
- Reservation system with capacity validation and automatic table status update
- Order processing with automatic total price calculation and table state management
- Inventory tracking with low stock alerts based on configurable thresholds
- Admin authentication with JWT and bcrypt password hashing
- Daily sales reporting for paid orders

---

## Business Logic

- Placing an order marks the table as `occupied` automatically
- Marking an order as `paid` releases the table back to `available`
- Creating a reservation checks table availability and capacity before confirming
- Cancelling a reservation sets the table back to `available`
- Low stock alert triggers when an item's quantity is at or below its threshold

---

## Author

Shahid Ali  
- LinkedIn: [linkedin.com/in/shahid-ali](https://www.linkedin.com/in/shahid-ali-bangash)
- GitHub: [github.com/shahidalibangash01](https://github.com/shahidalibangash01)

---

## License

This project was built as part of the CodeAlpha Backend Development Internship.
