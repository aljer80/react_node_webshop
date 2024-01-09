/**
 * Express.js Server Configuration
 */

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Recection at: ", promise, "reason:", reason);
});
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception: ", error);
});

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
listener.on("error", (error) => {
    handleListenerError(error, port);
});
listener.on("listening", () => {
    console.log("Your app is listening on port " + listener.address().port);
});

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