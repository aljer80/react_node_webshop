const express = require("express");
const router = express.Router();
const controller = require("../controllers/endpointsController.js");

router.get("/products", controller.getAllProductsHelper);
router.get("/products/:id", controller.getProductByIdHelper);

router.get("/orders", controller.getAllOrdersHelper);
router.get("/orders/:id", controller.getOrderByIdHelper);
router.post("/orders", controller.createOrderHelper);
router.put("/orders/:id", controller.updateOrderByIdHelper);
router.delete("/orders/:id", controller.deleteOrderByIdHelper);

module.exports = router;