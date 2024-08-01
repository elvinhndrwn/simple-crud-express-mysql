# Simple CRUD API with Express JS and MYSQL
## BOOK API

## Requirements

- Node.js
- MySQL
- Npm

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/books-crud-api.git
   cd books-crud-api
   ```

2. Install Dependencies
   ```
   npm install
   ```

3. Configure the Database and Table
   ```
   CREATE DATABASE express_mysql;
   USE express_mysql;
   CREATE TABLE Books (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL);
   ```
   
4. Start application
   ```
   nodemon .
   ```

## Endpoints
1. FIND ALL
   - URL: /books
   - METHOD: Get
   - Response :
     ```
     [
          {
              "id": 2,
              "title": "book 1",
              "author": "author X"
          }
      ]
     ```

2. FIND BY ID
   - URL: /books/{id}
   - METHOD: Get
   - Response :
     ```
     {
        "id": 2,
        "title": "book 1",
        "author": "author X"
     }
     ```

3. DELETE BOOK
     - URL: /books/{id}
     - METHOD: Delete
     - Response :
       ```
       {
          "message": "Book deleted successfully"
       }
       ```

4. ADD BOOK
   - URL: /books
   - METHOD: Post
   - Request Body:
     ```
     {
        "title": "new book",
        "author": "author X"
     }
     ```
   - Response:
     ```
     {
        "id": 7,
        "title": "new book",
        "author": "author X"
     }
     ```

5. UPDATE BOOK
   - URL: /books/{id}
   - METHOD: Put
   - Request Body:
     ```
     {
        "title": "new book update",
        "author": "author A"
     }
     ```
   - Response:
     ```
     {
        "message": "Book updated successfully"
     }
     ```
