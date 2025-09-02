# Express.js REST API Project

## Overview
This project is a simple REST API built with Express.js. It demonstrates CRUD operations, error handling, and in-memory data management.

## Setup Instructions

1. **Clone the repository or copy the project folder.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   node server.js
   ```
4. **API runs at:**  
   `http://localhost:3000`

## API Endpoints

### Root
- `GET /`
  - Response: `"Hello, World!"`

### Items
- `GET /items`
  - Retrieve all items.
- `GET /items/:id`
  - Retrieve a single item by ID.
- `POST /items`
  - Create a new item.
  - Body: `{ "name": "Item Name", "description": "Item Description" }`
- `PUT /items/:id`
  - Update an item by ID.
  - Body: `{ "name": "New Name", "description": "New Description" }`
- `DELETE /items/:id`
  - Delete an item by ID.

## Example Requests (using Postman or curl)

### Create an Item
```http
POST /items
Content-Type: application/json

{
  "name": "Sample Item",
  "description": "This is a test item."
}
```

### Get All Items
```http
GET /items
```

### Get Item by ID
```http
GET /items/1
```

### Update Item
```http
PUT /items/1
Content-Type: application/json

{
  "name": "Updated Name",
  "description": "Updated Description"
}
```

### Delete Item
```http
DELETE /items/1
```

## Error Handling

- Missing fields in POST/PUT:  
  Response: `400 Bad Request`  
  Body: `{ "error": "Name and description are required" }`
- Item not found:  
  Response: `404 Not Found`  
  Body: `{ "error": "Item not found" }`
- Invalid route:  
  Response: `404 Not Found`  
  Body: `{ "error": "Route not found" }`
- Server error:  
  Response: `500 Internal Server Error`  
  Body: `{ "error": "Internal Server Error" }`

## Testing

Use [Postman](https://www.postman.com/) to test each endpoint.

## What I Learned

- How to set up an Express.js server
- Implementing RESTful CRUD operations
- Handling errors and validating data
- Testing APIs with Postman

---

*For questions or improvements, feel free to contact the project maintainer.*