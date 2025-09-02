# Express.js + PostgreSQL API Documentation

## 1. Setup Instructions

### Dependencies
- Node.js (already installed in your dev container)
- PostgreSQL (already installed and running)
- Express.js and pg (PostgreSQL client for Node.js)

### Install Project Dependencies
```bash
cd /workspaces/3MTT_SoftwareDev/express-pg-api
npm install
```

### Database Configuration
- Ensure PostgreSQL is running:  
  ```bash
  sudo service postgresql status
  ```
- Database connection is configured in `db.js`:
  ```javascript
  user: 'myuser'
  host: 'localhost'
  database: 'mydb'
  password: 'mypassword'
  port: 5432
  ```

## 2. API Endpoints

### Users

- **GET /users**  
  Retrieve all users.
  - Response:  
    ```json
    [
      { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 }
    ]
    ```

- **GET /users/:id**  
  Retrieve a user by ID.
  - Response:  
    ```json
    { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 }
    ```

- **POST /users**  
  Create a new user.
  - Request Body:  
    ```json
    { "name": "Bob", "email": "bob@example.com", "age": 30 }
    ```
  - Response:  
    ```json
    { "id": 2, "name": "Bob", "email": "bob@example.com", "age": 30 }
    ```

- **PUT /users/:id**  
  Update a user by ID.
  - Request Body:  
    ```json
    { "name": "Bob Updated", "email": "bob.new@example.com", "age": 31 }
    ```
  - Response:  
    ```json
    { "id": 2, "name": "Bob Updated", "email": "bob.new@example.com", "age": 31 }
    ```

- **DELETE /users/:id**  
  Delete a user by ID.
  - Response:  
    ```json
    { "message": "User deleted" }
    ```

## 3. How to Run and Test the Project

### Start the API Server
```bash
node server.js
```

### Test with Postman or curl

- **Get all users:**
  ```bash
  curl http://localhost:3000/users
  ```

- **Create a user:**
  ```bash
  curl -X POST http://localhost:3000/users \
    -H "Content-Type: application/json" \
    -d '{"name":"Bob","email":"bob@example.com","age":30}'
  ```

- **Open in browser (if needed):**
  ```bash
  $BROWSER http://localhost:3000/users
  ```

---

**Tip:**  
Use Postman for more advanced testing and to send custom requests.

---

*For any issues, check your database connection in `db.js` and ensure PostgreSQL