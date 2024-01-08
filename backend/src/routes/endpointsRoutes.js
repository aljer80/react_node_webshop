const express = require("express");
const router = express.Router();
const controller = require("../controllers/endpointsController.js");

router.get("/products", controller.getAllProducts);
router.get("/products/:id", controller.getProductById);

router.get("/orders", controller.getAllOrders);
router.get("/orders/:id", controller.getOrderById);
router.post("/orders", controller.createOrder);
router.put("/orders/:id", controller.updateOrderById);
router.delete("/orders/:id", controller.deleteOrderById);

module.exports = router;