# Node API Template

A modular Node.js Express API architecture template designed for rapid development and maintainable code structure. This template follows clean architecture principles with a focus on modularity, reusability, and scalability.

## 🏗️ Architecture Overview

This API follows a **modular architecture** pattern that promotes:

- **Separation of Concerns**: Each module handles its own business logic
- **Reusability**: Shared services and utilities across modules
- **Scalability**: Easy to add new modules and features
- **Maintainability**: Clear folder structure and standardized patterns

### Core Principles

1. **Module-Based Structure**: Each feature (user, product, etc.) is organized as a separate module
2. **Shared Services**: Common functionality is abstracted into reusable base services
3. **Standardized HTTP Responses**: Consistent response format using predefined status codes
4. **Path Aliases**: Clean imports using `#@/` alias for better code organization
5. **Error Handling**: Centralized error handling with proper HTTP status codes

## 📁 Folder Structure

```
node_api_tmp/
├── src/
│   ├── main.js                          # Application entry point
│   ├── _shared/                         # Shared utilities and constants
│   │   └── enums/
│   │       └── httpStatusCode.js        # HTTP status code definitions
│   ├── databases/
│   │   └── connect-mongo.js            # Database connection configuration
│   ├── modules/                         # Business logic modules
│   │   ├── _shared/
│   │   │   └── base-services.js        # Reusable CRUD operations
│   │   ├── user/                       # User module
│   │   │   ├── index.js               # Module entry point
│   │   │   ├── model/
│   │   │   │   └── index.js           # User data model
│   │   │   └── services/
│   │   │       └── index.js           # User business logic
│   │   └── product/                   # Product module
│   │       ├── index.js               # Module entry point
│   │       ├── model/
│   │       │   └── index.js           # Product data model
│   │       └── services/
│   │           └── index.js           # Product business logic
│   └── routes/                        # API route definitions
│       ├── index.js                   # Main router
│       └── users/                     # User routes
│           ├── index.js               # User router setup
│           ├── routes.js              # User CRUD routes
│           └── [userId]/              # Nested user routes
│               ├── index.js           # User-specific router
│               ├── routes.js          # User-specific routes
│               └── products/          # User's products routes
│                   ├── index.js       # Products router setup
│                   ├── routes.js      # Products CRUD routes
│                   └── [productId]/   # Specific product routes
│                       ├── index.js   # Product router setup
│                       └── routes.js  # Product-specific routes
├── test/                              # API testing files
│   ├── users.rest                     # User endpoint tests
│   └── products.rest                  # Product endpoint tests
├── package.json                       # Project dependencies and scripts
├── jsconfig.json                      # JavaScript configuration
└── README.md                          # This file
```

### Folder Structure Explanation

#### `/src/main.js`
The application entry point that:
- Sets up Express server and middleware
- Configures CORS, JSON parsing, and static file serving
- Loads routes and database connections
- Handles 404 and error responses with proper HTTP status codes

#### `/src/_shared/`
Contains shared utilities and constants:
- **`enums/httpStatusCode.js`**: Centralized HTTP status code definitions used throughout the application

#### `/src/databases/`
Database connection and configuration files:
- **`connect-mongo.js`**: MongoDB connection setup using Mongoose

#### `/src/modules/`
Business logic organized by feature:
- **`_shared/base-services.js`**: Reusable CRUD operations (fetchAll, fetchById, createOne, updateById, deleteById)
- **`[module]/model/`**: Data models and schemas
- **`[module]/services/`**: Business logic and data operations
- **`[module]/index.js`**: Module entry point and exports

#### `/src/routes/`
API route definitions with nested structure:
- **RESTful routing**: Following REST conventions
- **Nested routes**: Support for relationships (users → products)
- **Modular routing**: Each feature has its own route files

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd node_api_tmp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

## 📋 API Usage

### HTTP Status Codes

The API uses standardized HTTP status codes defined in [`httpStatusCode.js`](src/_shared/enums/httpStatusCode.js):

```javascript
export const STATUS_CODES = {
  OK: 200,              // Successful GET, PUT requests
  CREATED: 201,         // Successful POST requests
  NO_CONTENT: 204,      // Successful DELETE requests
  BAD_REQUEST: 400,     // Invalid request data
  UNAUTHORIZED: 401,    // Authentication required
  FORBIDDEN: 403,       // Access denied
  NOT_FOUND: 404,       // Resource not found
  SERVER_ERROR: 500,    // Internal server errors
  NOT_IMPLEMENTED: 501, // Feature not implemented
};
```

### Response Format

All API responses follow a consistent format:

**Success Response:**
```json
{
  "success": true,
  "data": {
    // Response data here
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error Type",
  "message": "Detailed error message"
}
```

### API Endpoints

#### Users API

| Method | Endpoint | Description | Status Code |
|--------|----------|-------------|-------------|
| GET | `/users` | Get all users with pagination | [`STATUS_CODES.OK`](src/_shared/enums/httpStatusCode.js) |
| GET | `/users/:userId` | Get user by ID | [`STATUS_CODES.OK`](src/_shared/enums/httpStatusCode.js) |
| POST | `/users` | Create new user | [`STATUS_CODES.CREATED`](src/_shared/enums/httpStatusCode.js) |
| PUT | `/users/:userId` | Update user by ID | [`STATUS_CODES.OK`](src/_shared/enums/httpStatusCode.js) |
| DELETE | `/users/:userId` | Delete user by ID | [`STATUS_CODES.NO_CONTENT`](src/_shared/enums/httpStatusCode.js) |

#### Products API

| Method | Endpoint | Description | Status Code |
|--------|----------|-------------|-------------|
| GET | `/users/:userId/products` | Get user's products | [`STATUS_CODES.OK`](src/_shared/enums/httpStatusCode.js) |
| GET | `/users/:userId/products/:productId` | Get specific product | [`STATUS_CODES.OK`](src/_shared/enums/httpStatusCode.js) |
| POST | `/users/:userId/products` | Create new product for user | [`STATUS_CODES.CREATED`](src/_shared/enums/httpStatusCode.js) |
| PUT | `/users/:userId/products/:productId` | Update product | [`STATUS_CODES.OK`](src/_shared/enums/httpStatusCode.js) |
| DELETE | `/users/:userId/products/:productId` | Delete product | [`STATUS_CODES.NO_CONTENT`](src/_shared/enums/httpStatusCode.js) |

### Example Usage

#### Create a User

```javascript
// POST /users
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user",
  "status": "active"
}

// Response: STATUS_CODES.CREATED (201)
{
  "success": true,
  "data": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "John Doe",
    "email": "john@example.com",
    // ... other user data
  }
}
```

#### Get Users with Pagination

```javascript
// GET /users?page=1&limit=10

// Response: STATUS_CODES.OK (200)
{
  "success": true,
  "data": {
    "data": [
      // Array of users
    ],
    "pagination": {
      "total": 50,
      "totalPages": 5,
      "page": 1,
      "limit": 10,
      "hasNext": true,
      "hasPrevious": false
    }
  }
}
```

#### Error Handling

```javascript
// GET /users/invalid-id

// Response: STATUS_CODES.NOT_FOUND (404)
{
  "success": false,
  "error": "Not Found",
  "message": "Resource not found"
}
```

## 🔧 Development Guide

### Adding a New Module

1. **Create module structure**
   ```bash
   mkdir -p src/modules/[module-name]/{model,services}
   ```

2. **Create model** (`src/modules/[module-name]/model/index.js`)
   ```javascript
   import mongoose from "mongoose";
   
   const schema = new mongoose.Schema({
     // Define your schema
   });
   
   export default mongoose.model("[ModuleName]", schema);
   ```

3. **Create services** (`src/modules/[module-name]/services/index.js`)
   ```javascript
   import { fetchAll, fetchById, createOne, updateById, deleteById } from "#@/modules/_shared/base-services.js";
   import Model from "../model/index.js";
   
   export default {
     fetchAll: (params) => fetchAll(Model, params),
     fetchById: (params) => fetchById(Model, params),
     createOne: (params) => createOne(Model, params),
     updateById: (params) => updateById(Model, params),
     deleteById: (params) => deleteById(Model, params),
   };
   ```

4. **Create routes** (`src/routes/[module-name]/routes.js`)
   ```javascript
   import express from "express";
   import services from "#@/modules/[module-name]/services/index.js";
   import { STATUS_CODES } from "#@/_shared/enums/httpStatusCode.js";
   
   const router = express.Router();
   
   router.get("/", async (req, res, next) => {
     try {
       const data = await services.fetchAll({ query: req.query });
       res.status(STATUS_CODES.OK).json({ success: true, data });
     } catch (error) {
       next(error);
     }
   });
   
   export default router;
   ```

### Using HTTP Status Codes

Always import and use the standardized status codes:

```javascript
import { STATUS_CODES } from "#@/_shared/enums/httpStatusCode.js";

// Success responses
res.status(STATUS_CODES.OK).json({ success: true, data });
res.status(STATUS_CODES.CREATED).json({ success: true, data });
res.status(STATUS_CODES.NO_CONTENT).send();

// Error responses
res.status(STATUS_CODES.BAD_REQUEST).json({ success: false, error: "Validation Error", message: "Invalid input" });
res.status(STATUS_CODES.NOT_FOUND).json({ success: false, error: "Not Found", message: "Resource not found" });
res.status(STATUS_CODES.SERVER_ERROR).json({ success: false, error: "Server Error", message: "Something went wrong" });
```

## 🧪 Testing

Use the `.rest` files in the `/test` directory to test API endpoints:

- **`test/users.rest`**: User endpoint tests
- **`test/products.rest`**: Product endpoint tests

### Running Tests

Install the REST Client extension in VS Code or use tools like Postman/Insomnia to execute the test files.

## 📦 Scripts

- **`npm start`**: Start production server
- **`npm run dev`**: Start development server with hot reload
- **`npm run seed`**: Run database seeding (if available)

## 🤝 Contributing

1. Follow the existing folder structure and naming conventions
2. Use the shared base services for common CRUD operations
3. Always use HTTP status codes from [`httpStatusCode.js`](src/_shared/enums/httpStatusCode.js)
4. Maintain consistent response formats
5. Add appropriate error handling
6. Update tests when adding new endpoints

## 📄 License

This project is licensed under the ISC License.
