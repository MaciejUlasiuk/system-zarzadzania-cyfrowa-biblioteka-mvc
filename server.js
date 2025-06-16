const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const database = require('./utils/database');

const errorController = require('./controllers/errorController');
const mainRoutes = require('./routing/main');
const bookRoutes = require('./routing/book');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bookRoutes);
app.use(mainRoutes);

app.use(errorController.get404);

database.connect()
    .then(() => {
        app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });