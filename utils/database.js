const mongoose = require('mongoose');
const config = require('../config');

mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect(config.MONGO_URI);
};

module.exports = {
    connect
};