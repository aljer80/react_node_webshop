const express = require("express");
require("dotenv").config();
const endpointsRoutes = require("./src/routes/endpointsRoutes.js");
const app = express();

app.get("/products", endpointsRoutes);
app.get("/products/:id", endpointsRoutes);
app.get("/orders", endpointsRoutes);
app.get("/orders/:id", endpointsRoutes);
app.post("/orders", endpointsRoutes);
app.put("/orders/:id", endpointsRoutes);
app.delete("/orders/:id", endpointsRoutes);

app.listen(process.env.DB_PORT, () => console.log(`The application is listening on port ${process.env.DB_PORT}.`));