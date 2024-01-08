const DbObject = require("../models/DbObject.js");

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
} 

connectToDb();
async function connectToDb(){
    try {
        const db = new DbObject(dbConfig);
        await db.connect();
    } catch (error){
        console.error(error.message);
    }
}

async function getAllProducts(req, res, next){
    const query = "SELECT * FROM productlist;";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
}

async function getProductById(req, res, next){
    const query = "SELECT * FROM productlist WHERE id = id;";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function getAllOrders(req, res, next){
    const query = "SELECT * FROM orders;";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function getOrderById(req, res, next){
    const query = "SELECT * FROM orders WHERE id = id;";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function createOrder(req, res, next){
    const query = "INSERT INTO orders (email, item) VALUES (email, item);";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function updateOrderById(req, res, next){
    const query = "UPDATE orders SET email=email, item=item WHERE id=id;";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function deleteOrderById(req, res, next){
    const query = "DELETE FROM orders WHERE id=id;";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

module.exports = { getAllProducts, getProductById, getAllOrders, getOrderById, createOrder, updateOrderById, deleteOrderById }