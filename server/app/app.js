require('dotenv').config('../.env');
const express = require('express');
const { notFoundMiddlware, errorHandlerMiddlware } = require('./error');
const app = express();

app.use(require('./middleware'));
app.use(require('./routes'));
app.use(notFoundMiddlware);
app.use(errorHandlerMiddlware);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files..
    app.use(express.static(path.join(__dirname, '../../client/build')));

    // Handle react routing, return all requests to React App..
    app.get('*', function (_req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html')); 
    });
}

module.exports = app;