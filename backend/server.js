/**
 * Event handler for unhandled promise rejections. Logs details about the rejection.
 *
 * @param {*} reason - The reason for the unhandled rejection.
 * @param {Promise} promise - The promise that was rejected.
 * @returns {void}
 */
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at: ", promise, "reason:", reason);
});

/**
 * Event handler for uncaught exceptions. Logs details about the uncaught exception.
 *
 * @param {Error} error - The uncaught exception.
 * @returns {void}
 */
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception: ", error);
});

// import required files
const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./src/middleware/errorHandling.js");
const routes = require("./src/routes/endpointsRoutes.js");
const app = express();
const port = process.env.LISTENING_PORT || 3000;

//setting request decoders to interpret the information sent from form.
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

//setting middleware
app.use("/api/v1/", routes);
app.use(errorHandler);

//setting up server to listen
const listener = app.listen(port);

/**
 * Event handler for server error. Logs error details and exits the process if necessary.
 *
 * @param {Error} error - The error that occurred during the server setup.
 * @param {string|number} port - The port on which the server is attempting to listen.
 * @returns {void}
 */
listener.on("error", (error) => {
    handleListenerError(error, port);
});

/**
 * Event handler for successful server listening. Logs a message indicating the listening port.
 *
 * @returns {void}
 */
listener.on("listening", () => {
    console.log("Your app is listening on port " + listener.address().port);
});

/**
 * Handles errors that occur during the setup of the server. Logs details and exits the process if necessary.
 *
 * @param {Error} error - The error that occurred during the server setup.
 * @param {string|number} port - The port on which the server is attempting to listen.
 * @returns {void}
 */
function handleListenerError(error, port) {
    if(error.syscall !== "listen"){
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}