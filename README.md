```markdown
# 🚀 TypeScript CRUD API with Express & MongoDB

A simple and clean REST API built with TypeScript, Express, and MongoDB (using Mongoose). Perfect for beginners learning backend development with TypeScript.

## 📌 Features

- Full CRUD operations
- TypeScript support
- MongoDB database integration
- Express.js for routing
- Environment variables
- Hot reloading during development

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose ODM)
- **Development**: ts-node-dev (hot reloading)
- **Testing**: Postman/Thunder Client

## 📂 Project Structure

src/
├── config/         # Database connection setup
│   └── db.ts
├── controllers/    # Business logic
│   └── userController.ts
├── models/         # MongoDB schemas
│   └── User.ts
├── routes/         # API endpoints
│   └── userRoutes.ts
└── index.ts        # Application entry point

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas URI)
- Postman/Insomnia for API testing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Pymann1234/crud-api-ts.git
cd crud-api-ts

2. Install dependencies:
```bash
pnpm install

3. Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/crud-api-ts
PORT=5000

4. Start development server:
```bash
pnpm dev

## 📝 API Endpoints

### Users Resource

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | /api/users       | Get all users          |
| GET    | /api/users/:id   | Get single user        |
| POST   | /api/users       | Create new user        |
| PUT    | /api/users/:id   | Update existing user   |
| DELETE | /api/users/:id   | Delete user            |

### Example Request (POST /api/users)
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 28
}

## 🏗️ Build & Run

```bash
# Build TypeScript to JavaScript
pnpm build

# Run production build
pnpm start

# Development mode (with hot reload)
pnpm dev

## 📌 Important Notes

1. This is a basic implementation without:
   - Authentication
   - Input validation
   - Error handling middleware
   - Rate limiting
   - Production-ready security

2. For production use, consider adding:
   - Environment variable validation
   - Proper error handling
   - Request validation
   - Logging
   - API documentation (Swagger/OpenAPI)

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.


---

> **Note**: This project is intentionally kept simple for educational purposes. Consider it a foundation to build upon for more complex applications.
