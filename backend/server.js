const express = require("express");
require("dotenv").config();
const endpointsRoutes = require("./src/routes/endpointsRoutes.js");
const app = express();

app.use(express.json());
app.use("/api/v1/", endpointsRoutes);

try {
    app.listen(8080, "localhost");
} catch (error) {
    console.log(error.message);
}