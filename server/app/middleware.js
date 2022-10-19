const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * ---- Using The Useful Middlewares ----
 */
const middleware = [
    morgan('dev'), 
    cors(), 
    express.json(), 
    cookieParser()
];

module.exports = middleware;