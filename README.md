# REST API Project

This project is a simple Node.js REST API built with Express and Mongoose. It connects to MongoDB and provides CRUD routes for managing users.

## Requirements

- Node.js
- npm
- MongoDB running locally, or a MongoDB Atlas connection string
- Postman for testing the routes

## Installation

Install the project dependencies:

```bash
npm install
```

## Environment Variables

The environment variables are stored in `config/.env`.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/rest-api-project
```

Use the local MongoDB URI above, or replace `MONGO_URI` with your MongoDB Atlas connection string.

## Run The Server

Start the Express server:

```bash
npm start
```

The server runs on:

```text
http://localhost:5000
```

## User Routes

### Get All Users

```http
GET /users
```

Returns all users from the database.

### Add A New User

```http
POST /users
```

Example JSON body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### Edit A User By ID

```http
PUT /users/:id
```

Example JSON body:

```json
{
  "name": "Jane Doe",
  "age": 30
}
```

### Delete A User By ID

```http
DELETE /users/:id
```

Deletes one user from the database using the user ID.

## Project Structure

```text
config/
  .env
models/
  User.js
server.js
README.md
package.json
```

## Notes

Each route uses Mongoose methods to manipulate data and returns the result in the response.

## Author

Abdullahi Sudeis
