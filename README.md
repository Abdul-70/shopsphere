# 🛒 ShopSphere — MERN E-Commerce Application

ShopSphere is a full-stack e-commerce application built with the **MERN Stack**.
The project is being developed step-by-step to demonstrate real-world full-stack development skills, including authentication, authorization, product management, search, filtering, pagination, sorting, and data validation.

> 🚧 **Project Status:** Backend API development in progress.

---

## 🚀 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* dotenv
* Nodemon

### Tools

* Postman
* Git
* GitHub
* VS Code

---

## ✅ Currently Implemented

### 🔐 Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Admin Role Authorization
* Admin-only Product Operations

### 📦 Product Management

* Create Product
* Get All Products
* Get Single Product
* Update Product
* Delete Product
* Product Validation

### 🔍 Product Search & Filtering

* Keyword Search
* Search by Product Name
* Search by Description
* Search by Brand
* Category Filtering
* Brand Filtering
* Minimum Price Filtering
* Maximum Price Filtering
* Combined Search & Filters

### 📄 Pagination

* Page-based pagination
* Configurable products per page
* Total product count
* Total pages calculation

### ↕️ Sorting

* Price: Low to High
* Price: High to Low
* Newest Products
* Oldest Products

---

## 📁 Current Backend Structure

```text
server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── productController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
│
├── models/
│   ├── userModel.js
│   └── productModel.js
│
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Server

```bash
cd shopsphere/server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env`

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Never commit your `.env` file to GitHub.

### 5. Start Development Server

```bash
npm run dev
```

Server will run on:

```text
http://localhost:5000
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint               | Access | Description                |
| ------ | ---------------------- | ------ | -------------------------- |
| POST   | `/api/auth/register`   | Public | Register a new user        |
| POST   | `/api/auth/login`      | Public | Login user                 |
| GET    | `/api/auth/profile`    | User   | Get logged-in user profile |
| GET    | `/api/auth/admin-test` | Admin  | Test admin authorization   |

---

## Products

| Method | Endpoint            | Access | Description        |
| ------ | ------------------- | ------ | ------------------ |
| GET    | `/api/products`     | Public | Get all products   |
| GET    | `/api/products/:id` | Public | Get single product |
| POST   | `/api/products`     | Admin  | Create product     |
| PUT    | `/api/products/:id` | Admin  | Update product     |
| DELETE | `/api/products/:id` | Admin  | Delete product     |

---

# 🔎 Product Search Examples

### Search by keyword

```text
GET /api/products?keyword=nike
```

### Filter by category

```text
GET /api/products?category=Shoes
```

### Filter by brand

```text
GET /api/products?brand=Samsung
```

### Filter by price

```text
GET /api/products?minPrice=2000&maxPrice=6000
```

### Pagination

```text
GET /api/products?page=1&limit=10
```

### Sorting

```text
GET /api/products?sort=price_asc
```

```text
GET /api/products?sort=price_desc
```

```text
GET /api/products?sort=newest
```

```text
GET /api/products?sort=oldest
```

### Combined Query

```text
GET /api/products?keyword=nike&category=Shoes&minPrice=2000&maxPrice=7000&sort=price_asc&page=1&limit=5
```

---

# 🔐 Authentication

ShopSphere uses **JWT (JSON Web Token)** for authentication.

Protected requests require:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

Admin-only operations require a valid JWT belonging to a user with:

```text
role: admin
```

---

# 🧠 MongoDB Concepts Used

This project currently demonstrates several important MongoDB/Mongoose concepts:

* `$regex`
* `$or`
* `$gte`
* `$lte`
* `find()`
* `findById()`
* `findByIdAndUpdate()`
* `findByIdAndDelete()`
* `skip()`
* `limit()`
* `sort()`
* `countDocuments()`
* Mongoose Schema Validation
* Timestamps

---

# 🛡️ Security

* Passwords are hashed before storing in the database.
* JWT is used for authentication.
* Protected routes require authentication.
* Admin operations require admin authorization.
* Environment variables are used for sensitive configuration.

---

# 🛣️ Roadmap

The project is still under development.

Planned features:

* [ ] Product image upload
* [ ] Cloudinary integration
* [ ] Product reviews & ratings
* [ ] Shopping cart
* [ ] Wishlist
* [ ] User addresses
* [ ] Order management
* [ ] Payment integration
* [ ] Admin dashboard
* [ ] React frontend
* [ ] Responsive UI
* [ ] Redux/State management
* [ ] Deployment
* [ ] Production optimization

---

# 🎯 Project Goal

The goal of ShopSphere is to build a complete, production-style e-commerce application while demonstrating practical **full-stack development skills** across:

```text
Frontend
   ↓
React
   ↓
API
   ↓
Node.js + Express
   ↓
MongoDB
   ↓
Authentication
   ↓
Authorization
   ↓
Deployment
```

---

## 👨‍💻 Developer

**Abdurrahim**

This project is being developed as a portfolio project to demonstrate full-stack web development skills using the MERN stack.
