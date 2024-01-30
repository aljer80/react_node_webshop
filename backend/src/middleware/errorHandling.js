/**
 * Express.js Error Handling Middleware
 * - Logs the error stack trace to the console.
 * - Sends a 500 Internal Server Error response to the client.
 *
 * @param {Error} err - The error object representing the failure.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 */
async function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json(err.message);
}

module.exports = {
    errorHandler
}