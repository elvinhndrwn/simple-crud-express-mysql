const db = require('../config/database');

class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    static getAllBooks(callback) {
        db.query('SELECT * FROM books', (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        });
      }

    static getBookById(id, callback) {
        db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results[0]);
          }
        });
      }

      static addBook(book, callback) {
        db.query('INSERT INTO books SET ?', book, (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        });
      }

      static updateBook(id, book, callback) {
        db.query('UPDATE books SET ? WHERE id = ?', [book, id], (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        });
      }

      static deleteBook(id, callback) {
        db.query('DELETE FROM books WHERE id = ?', [id], (err, results) => {
            if (err) {
              callback(err);
            } else {
              callback(null, results);
            }
        })
      }
}

module.exports = Book;