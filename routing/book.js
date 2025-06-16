const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/books', bookController.getBooks);

router.get('/add-book', bookController.getAddBook);

router.post('/add-book', bookController.postAddBook);

router.get('/edit-book/:bookId', bookController.getEditBook);

router.post('/edit-book', bookController.postEditBook);

router.post('/delete-book', bookController.postDeleteBook);

module.exports = router;