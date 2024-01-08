const express = require("express");
const router = express.Router();
const controller = require("../controllers/endpointsController.js");

router.get("/products", (req, res) => {
    const products = controller.getAllProducts();
    res.status(200).send(products);
});

router.get("/products/:id", (req, res) => {
    const product = controller.getProductById(id);
    res.status(200).send(product);
});

router.get("/orders", (req, res) => {
    const orders = controller.getAllOrders();
    res.status(200).send(orders);
});

router.get("/orders/:id", (req, res) => {
    const order = controller.getOrderById(id);
    res.status(200).send(order);
});

router.post("/orders", (req, res) => {
    const isOrderCreated = controller.createOrder();
    res.status(200).send(isOrderCreated);
});

router.put("/orders/:id", (req, res) => {
    const isOrderUpdated = controller.updateOrderById(id);
    res.status(200).send(isOrderUpdated);
});

router.delete("/orders/:id", (req, res) => {
    const isOrderDeleted = controller.deleteOrderById(id);
    res.status(200).send(isOrderDeleted);
});


module.exports = router;