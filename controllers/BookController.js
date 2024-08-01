const Book = require('../models/book');

class BookController {
    static getAllBooks(req, res) {
        Book.getAllBooks((err, books) => {
            if (err) {
                res.status(500).send({ message: 'Error fetching books' });
            } else {
                res.send(books);
            }
        });
    }

    static getBookById(req, res) {
        const id = req.params.id;
        Book.getBookById(id, (err, book) => {
            if (err) {
                res.status(500).send({ message: 'Error fetching book' });
            } else {
                res.send(book);
            }
        });
    }

    static addBook(req, res) {
        const { title, author } = req.body;
        const newBook = new Book(null, title, author);
        Book.addBook(newBook, (err, results) => {
          if (err) {
            res.status(500).send({ message: 'Error creating book' });
          } else {
            newBook.id = results.insertId; // Return the inserted book as the response
            res.json(newBook); 
          }
        });
      }

      static updateBook(req, res) {
        const id = req.params.id;
        const { title, author } = req.body;
        const updatedBook = new Book(id, title, author);
        Book.updateBook(id, updatedBook, (err, results) => {
          if (err) {
            res.status(500).send({ message: 'Error updating book' });
          } else {
            res.send({ message: 'Book updated successfully' });
          }
        });
      }

      static deleteBook(req, res) {
        const id = req.params.id;
        Book.deleteBook(id, (err, result) => {
          if (err) {
            res.status(500).send({ message: 'Error deleting book' });
          } else {
            res.send({ message: 'Book deleted successfully' });
          }
        })
      }
}

module.exports = BookController;