/**
 * Middleware function to handle errors and send an Internal Server Error response.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
async function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
}

module.exports = { errorHandler };