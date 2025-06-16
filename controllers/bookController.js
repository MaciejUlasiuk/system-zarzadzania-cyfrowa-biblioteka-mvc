const Book = require('../models/Book');

exports.getBooks = (req, res, next) => {
    const searchQuery = req.query.search || '';
    let filter = {};

    if (searchQuery) {
        filter = {
            $or: [
                { title: { $regex: searchQuery, $options: 'i' } },
                { author: { $regex: searchQuery, $options: 'i' } }
            ]
        };
    }
    
    Book.find(filter)
        .then(books => {
            res.render('list-books', {
                books: books,
                pageTitle: 'Book Catalog',
                path: '/books',
                searchQuery: searchQuery
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddBook = (req, res, next) => {
    res.render('add-book', {
        pageTitle: 'Add a New Book',
        path: '/add-book',
        editing: false
    });
};

exports.postAddBook = (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    
    const book = new Book({
        title: title,
        author: author,
        year: year
    });

    book.save()
        .then(result => {
            res.redirect('/books');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Book.findById(bookId)
        .then(book => {
            if (!book) {
                return res.redirect('/');
            }
            res.render('edit-book', {
                pageTitle: 'Edit Book',
                path: '/edit-book',
                editing: true,
                book: book
            });
        })
        .catch(err => console.log(err));
};

exports.postEditBook = (req, res, next) => {
    const bookId = req.body.bookId;
    const updatedTitle = req.body.title;
    const updatedAuthor = req.body.author;
    const updatedYear = req.body.year;

    Book.findById(bookId)
        .then(book => {
            book.title = updatedTitle;
            book.author = updatedAuthor;
            book.year = updatedYear;
            return book.save();
        })
        .then(result => {
            res.redirect('/books');
        })
        .catch(err => console.log(err));
};

exports.postDeleteBook = (req, res, next) => {
    const bookId = req.body.bookId;
    Book.findByIdAndRemove(bookId)
        .then(() => {
            res.redirect('/books');
        })
        .catch(err => console.log(err));
};