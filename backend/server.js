/**
 * Express.js Server Configuration
 * - Creates an instance of the Express.js application.
 * - Configures middleware for handling JSON and URL-encoded data.
 * - Defines application routes using the specified endpoints.
 * - Utilizes custom error handling middleware.
 * - Starts the server on the specified port or default port 3000.
 * - Listens for 'error' and 'listen' events to handle server startup errors.
 *
 * @module server
 */
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at: ', promise, ' reason: ', reason);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

//importing required code
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { errorHandler } = require('./src/middleware/errorHandling');
const routes = require('./src/routes/endpointsRoutes');

//setting required values
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

//setting request decoders to interpret the information sent from form.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting middleware
app.use((req, res, next) => {
    console.log(`Incoming request from: ${req.ip}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    next();
});

const endpointsPath = "/api/v1";
app.use(endpointsPath, routes);
app.use(errorHandler);

//setting up server to listen
const listener = app.listen(port);
listener.on('error', (error) => {
    handleListenerError(error, port);
});
listener.on('listening', () => {
    console.log(`Your app is listening on port ${listener.address().port} at ${endpointsPath}`);
});

/**
 * Handles errors that may occur during server startup.
 *
 * @function
 * @param {Error} error - The error object representing the failure.
 * @param {(number|string)} port - The port number or named pipe the server is attempting to bind to.
 * @throws {Error} Throws an error for critical failures during server startup.
 */
function handleListenerError(error, port){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}