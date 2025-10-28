# node_api_tmp

This is a Node Express API architecture template for rapid modular API development.

## Architecture Overview

This template follows a layered architecture pattern that promotes separation of concerns, maintainability, and scalability. The architecture is organized into distinct layers, each with specific responsibilities:

- **Routes Layer**: Defines HTTP endpoints and maps them to controller functions
- **Controllers Layer**: Handles HTTP request/response logic, validation, and error handling
- **Services Layer**: Contains business logic and orchestrates data operations
- **Models Layer**: Defines data structures and database schemas
- **Middleware Layer**: Provides reusable request processing logic (authentication, logging, etc.)
- **Configuration Layer**: Manages environment-specific settings and application configuration

This separation allows for better testability, easier maintenance, and the ability to scale individual components independently.

## Folder Structure

```
node_api_tmp/
│
├── src/                    # Source code directory
│   ├── controllers/        # Route handlers and request/response logic
│   ├── models/            # Database models and schemas
│   ├── routes/            # API endpoint definitions
│   ├── services/          # Business logic and data operations
│   ├── middleware/        # Custom middleware functions
│   ├── config/            # Configuration files and environment setup
│   ├── utils/             # Helper functions and utilities
│   └── app.js             # Express application setup
│
├── tests/                 # Test files
│   ├── unit/              # Unit tests
│   └── integration/       # Integration tests
│
├── public/                # Static files (if serving frontend assets)
│   ├── images/            # Image assets
│   ├── css/               # Stylesheets
│   └── js/                # Client-side JavaScript
│
├── .env                   # Environment variables (not committed to version control)
├── .env.example           # Example environment variables template
├── .gitignore             # Git ignore rules
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── server.js              # Application entry point
```

## Folder Purposes

### `/src`
The main source code directory containing all backend application logic.

### `/src/controllers`
Contains controller functions that handle incoming HTTP requests. Controllers are responsible for:
- Parsing request parameters, body, and query strings
- Calling appropriate service layer functions
- Formatting and sending HTTP responses
- Handling errors and edge cases

**Example**: `userController.js` might contain functions like `getUser()`, `createUser()`, `updateUser()`, and `deleteUser()`.

### `/src/models`
Defines data structures and database schemas. This folder contains:
- Database model definitions (e.g., using Mongoose for MongoDB, Sequelize for SQL)
- Schema validations and constraints
- Model methods and virtual properties
- Data relationships and associations

**Example**: `User.js` would define the user schema with fields like email, password, name, etc.

### `/src/routes`
Defines all API endpoints and maps them to controller functions. Routes are responsible for:
- Defining URL patterns
- Specifying HTTP methods (GET, POST, PUT, DELETE, etc.)
- Connecting endpoints to controller functions
- Applying route-specific middleware

**Example**: `userRoutes.js` might define routes like `GET /api/users`, `POST /api/users`, `PUT /api/users/:id`.

### `/src/services`
Contains the core business logic of the application. Services are responsible for:
- Implementing business rules and workflows
- Interacting with models to perform CRUD operations
- Orchestrating complex operations involving multiple models
- Keeping controllers thin and focused on HTTP concerns

**Example**: `userService.js` might contain functions for user registration, authentication, profile updates, etc.

### `/src/middleware`
Houses custom middleware functions that process requests before they reach controllers. Common middleware includes:
- Authentication and authorization checks
- Request logging and monitoring
- Input validation and sanitization
- Error handling
- Rate limiting and security measures

**Example**: `authMiddleware.js` for JWT token verification, `validationMiddleware.js` for input validation.

### `/src/config`
Contains configuration files and environment-specific settings:
- Database connection configuration
- Third-party service credentials
- Application constants and settings
- Environment variable management

**Example**: `database.js` for database connection setup, `auth.js` for authentication configuration.

### `/src/utils`
Utility functions and helper modules that are reused across the application:
- Date and time formatting
- String manipulation
- Data transformation
- Custom error classes
- Common validation functions

**Example**: `logger.js` for application logging, `validators.js` for common validation functions.

### `/tests`
Contains all test files organized by test type:
- **`/tests/unit`**: Unit tests for individual functions and modules
- **`/tests/integration`**: Integration tests for API endpoints and workflows

### `/public`
Static files served directly to clients (if the API serves any frontend content):
- Images, CSS, JavaScript files
- Documentation assets
- Client-side libraries

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/sfn101/node_api_tmp.git
   cd node_api_tmp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Best Practices

- **Keep controllers thin**: Move business logic to services
- **Use middleware wisely**: Apply middleware at the appropriate level (global, router, or route)
- **Validate input**: Always validate and sanitize user input
- **Handle errors properly**: Use centralized error handling middleware
- **Write tests**: Maintain good test coverage for critical functionality
- **Use environment variables**: Never hardcode sensitive information
- **Follow consistent naming conventions**: Use clear, descriptive names for files and functions
- **Document your API**: Consider using tools like Swagger/OpenAPI for API documentation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
