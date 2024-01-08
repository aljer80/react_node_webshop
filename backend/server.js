const express = require("express");
require("dotenv").config();
const endpointsRoutes = require("./src/routes/endpointsRoutes.js");
const app = express();

app.use("/products", endpointsRoutes);
app.use("/products/:id", endpointsRoutes);
app.use("/orders", endpointsRoutes);
app.use("/orders/:id", endpointsRoutes);

try{
    app.listen(8080, "localhost");
} catch (error) {
    console.log(error.message);
}