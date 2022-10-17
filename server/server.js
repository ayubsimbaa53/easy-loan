const http = require('http'),
    app = require('./app/app'),
    config = require('./config/config').get(process.env.NODE_ENV),
    connectDB = require('./db/db');

const HOST = config.HOST;
const PORT = config.PORT;
const DB_URI = config.DB_URI || process.env.MONGO_URI;

// Node Server..
const server = http.createServer(app);

// DB Connection and server Listeninig..
connectDB(DB_URI)
    .then(() => {
        console.log('--------- Database is connected! -------');
        // Listening to Server..
        server.listen(PORT, HOST, () => {
            console.log(`Welcome to -- ${process.env.APP_NAME} -- `);
            console.log(`Server is running on http://${HOST}:${PORT}`);
        });
    })
    .catch(error => {
        console.log('ERR! Can\'t Connected with Database! -->', error.message);
    });