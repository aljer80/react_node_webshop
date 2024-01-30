/**
 * Express.js Router Configuration for Endpoints
 * - Defines routes for various product and order endpoints.
 * - Routes are handled by functions in the 'endpointsController' module.
 *
 * @module endpointsRoutes
 */

const express = require("express")
const controller = require('../controllers/endpointsController'); 
const paymentController = require('../controllers/paymentController'); 
const router = express.Router()

/**
 * Creates a custom error object for "Entry Not Found" scenarios.
 *
 * @param {Response} res - Express response object.
 * @returns {Error} - Custom error object with a 404 status.
 */
function entryNotFound(res){
    const message = "Did not find an entry!"
    const error = new Error(message);
    error.status = 404;

    return error;
}

/**
 * Creates a custom error object for unsuccessful operations.
 *
 * @param {Response} res - Express response object.
 * @returns {Error} - Custom error object with a 500 status.
 */
function unsuccessful(res){
    const message = "Operation Failed!";
    const error = new Error(message);
    error.status = 500;

    return error;
}

/**
 * Sends a JSON response with a 200 status.
 *
 * @param {Response} res - Express response object.
 * @param {any} data - Data to be included in the response.
 */
function respond(res, data){
    res.status(200).json(data);
}

router.post('/payments', async (req, res, next) => {
    try{
        const response = await paymentController.createPaymentIntent(req, res, next);

        return respond(res, response);
    }
    catch(error){
        return next(error);
    }
});

/**
 * GET all products.
 * @route GET /products
 * @handler endpointsController.getAllProducts
 */
router.get('/products', async (req, res, next) => {
    try{
        const products = await controller.getAllProducts(next);
        if(!products || products.length === 0){
            return next(entryNotFound(res));
        }
        return respond(res, products);
    }
    catch(error){
        return next(error);
    }
});


/**
 * GET a specific product by ID.
 * @route GET /products/:id
 * @handler endpointsController.getProduct
 */
router.get('/products/:id', async (req, res, next) => {
    const productId = req.params.id;
    try{
        const product = await controller.getProduct(productId, next);
        if(!product){
            return next(entryNotFound(res));
        }
        return respond(res, product);
    }
    catch(error){
        return next(error);
    }
});

/**
 * GET all orders.
 * @route GET /orders
 * @handler endpointsController.getAllOrders
 */
router.get('/orders', async (req, res, next) => {
    try{
        const orders = await controller.getAllOrders(next);
        if(!orders || orders.length === 0){
            return next(entryNotFound(res));
        }
        return respond(res, orders);
    }
    catch(error){
        return next(error);
    }
});

/**
 * GET a specific order by ID.
 * @route GET /orders/:id
 * @handler endpointsController.getOrder
 */
router.get('/orders/:id', async (req, res, next) => {
    const orderId = req.params.id;
    try{
        const order = await controller.getOrder(orderId, next);
        if(!order){
            return next(entryNotFound(res));
        }
        return respond(res, order);
    }
    catch(error){
        return next(error);
    }
});

/**
 * POST a new order.
 * @route POST /orders
 * @handler endpointsController.createOrder
 */
router.post('/orders', async (req, res, next) => {
    const data = req.body;
    try{
        const isAdded = await controller.newOrder(data, next);
        if(!isAdded){
            return next(unsuccessful(res));
        }
        return respond(res, isAdded);
    }
    catch(error){
        return next(error);
    }
});

/**
 * PUT (modify) a specific order by ID.
 * @route PUT /orders/:id
 * @handler endpointsController.modifyOrder
 */
router.put('/orders/:id', async (req, res, next) => {
    const orderId = req.params.id;
    const data = req.body;
    try{
        const isModified = await controller.modifyOrder(orderId, data, next);
        if(!isModified){
            return next(unsuccessful(res));
        }
        return respond(res, isModified);
    }
    catch(error){
        return next(error);
    }
});

/**
 * DELETE a specific order by ID.
 * @route DELETE /orders/:id
 * @handler endpointsController.deleteOrder
 */
router.delete('/orders/:id', async (req, res, next) => {
    const orderId = req.params.id;
    try{
        const isRemoved = await controller.deleteOrder(orderId, next);
        if(!isRemoved){
            return next(unsuccessful(res));
        }
        return respond(res, isRemoved);
    }
    catch(error){
        return next(error);
    }
});

module.exports = router;