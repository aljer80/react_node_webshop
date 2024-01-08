const DbObject = require("../models/DbObject.js");

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
} 

const db = new DbObject(dbConfig);
connectToDb();
function connectToDb(){
    try {
        db.connect();
    } catch (error){
        console.error(error.message);
    }
}

async function getAllProducts(req, res, next){
    try {
        const query = "SELECT * FROM productlist;";
        const data = await db.query(query);
        res.status(200).json(JSON.parse(data));
    } catch (error){
        console.error(error.message);
    }
}

async function getProductById(req, res, next){
    try {
        const query = "SELECT * FROM productlist WHERE id = id;";
        const data = await db.query(query);
        res.status(200).json(JSON.parse(data));
    } catch (error){
        console.error(error.message);
    }
} 

async function getAllOrders(req, res, next){
    try {
        const query = "SELECT * FROM orders;";
        const data = await db.query(query);
        res.status(200).json(JSON.parse(data));
    } catch (error){
        console.error(error.message);
    }
} 

async function getOrderById(req, res, next){
    try {
        const query = "SELECT * FROM orders WHERE id = id;";
        const data = await db.query(query);
        res.status(200).json(JSON.parse(data));
    } catch (error){
        console.error(error.message);
    }
} 

async function createOrder(req, res, next){
    try {
    const query = "INSERT INTO orders (email, item) VALUES (email, item);";
    const data = await db.query(query);
    res.status(200).json(JSON.parse(data));
} catch (error){
    console.error(error.message);
}
} 

async function updateOrderById(req, res, next){
    try {
        const query = "UPDATE orders SET email=email, item=item WHERE id=id;";
        const data = await db.query(query);
        res.status(200).json(JSON.parse(data));
    } catch (error){
        console.error(error.message);
    }
} 

async function deleteOrderById(req, res, next){
    try {
        const query = "DELETE FROM orders WHERE id=id;";
        const data = await db.query(query);
        res.status(200).json(JSON.parse(data));
    } catch (error){
        console.error(error.message);
    }
} 

module.exports = { getAllProducts, getProductById, getAllOrders, getOrderById, createOrder, updateOrderById, deleteOrderById }