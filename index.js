const express = require('express');
const app = express();
const bookRouter = require('./routes/book');

app.use(express.json());
app.use('/books', bookRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});