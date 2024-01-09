// import required files
const express = require("express");
const router = express.Router();
const controller = require("../controllers/endpointsController.js");

/**
 * Responds to the client with a 200 status and JSON data.
 * @param {Object} res - Express response object.
 * @param {Object} data - Data to be sent as a JSON response.
 */
function respond(res, data) {
    res.status(200).json(data);
}

/**
 * Creates a 404 error for entry not found.
 * @param {Object} res - Express response object.
 * @returns {Error} - 404 error object.
 */
function entryNotFound(res){
    const message = "Did not find an entry!"
    const error = new Error(message);
    error.status = 404;
    return error;
}

/**
 * Creates a 404 error for unsuccessful operations.
 * @param {Object} res - Express response object.
 * @returns {Error} - 404 error object.
 */
function unsuccessful(res) {
    const message = "Operation Failed!"
    const error = new Error(message);
    error.status = 404;
    return error;
}

/**
 * Retrieves all products.
 */
router.get("/products", async (req, res, next) => {
    try {
        const products = await controller.getAllProducts(next);
        if(!products || products.lenght === 0) {
            return next(entryNotFound(res)); 
        }
        respond(res, products);
    } catch (error) {
        return next(error);
    }
});

/**
 * Retrieves a product by ID.
 * @param {string} req.params.id - Product ID.
 */
router.get("/products/:id", async (req, res, next) => {
    const productId = req.params.id;
    try{
        const product = await controller.getProductById(productId, next);
        if(!product) {
            return next(entryNotFound(res));
        }
        respond(res, product);
    } catch(error) {
        return next(error);
    }
});

/**
 * Retrieves all orders.
 */
router.get("/orders", async (req, res, next) => {
    try {
        const orders = await controller.getOrders(next);
        if(!orders || orders.lenght === 0) {
            return next(entryNotFound(res));
        }
        respond(res, orders);
    } catch (error) {
        return next(error);
    }
});

/**
 * Retrieves an order by ID.
 * @param {string} req.params.id - Order ID.
 */
router.get("/orders/:id", async (req, res, next) => {
    const orderId = req.params.id;
    try {
        const order = await controller.getOrderById(orderId, next);
        if(!order) {
            return next(entryNotFound(res));
        }
        respond(res, order);
    } catch (error) {
        return next(error);
    }
});

/**
 * Creates a new order.
 * @param {Object} req.body - Request body containing order data.
 */
router.post('/orders', async (req, res, next) => {
    const data = req.body;
    try {
        const isAdded = await controller.newOrder(data, next);
        if(!isAdded){
            return next(unsuccessful(res));
        }
        respond(res, isAdded);
    } catch (error) {
        return next(error);
    }
});

/**
 * Modifies an existing order.
 * @param {string} req.params.id - Order ID.
 * @param {Object} req.body - Request body containing updated order data.
 */
router.put('/orders/:id', async (req, res, next) => {
    const orderId = req.params.id;
    const data = req.body;
    try {
        const isModified = await controller.modifyOrder(orderId, data, next);
        if(!isModified){
            return next(unsuccessful(res));
        }
        respond(res, isModified); 
    } catch (error) {
        return next(error);
    }
});

/**
 * Deletes an existing order.
 * @param {string} req.params.id - Order ID.
 */
router.delete('/orders/:id', async (req, res, next) => {
    const orderId = req.params.id;
    try {
        const isRemoved = await controller.deleteOrder(orderId, next);
        if(!isRemoved){
            return next(unsuccessful(res));
        }
        respond(res, isRemoved); 
    } catch (error) {
        return next(error);
    }
});

module.exports = router;