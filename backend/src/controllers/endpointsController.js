const DbObject = require("./src/models/DbObject.js");

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
} 

const db = new DbObject(dbConfig);
await db.connect();

async function getAllProducts(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
}

async function getProductById(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function getAllOrders(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function getOrderById(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function createOrder(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function updateOrderById(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 

async function deleteOrderById(req, res, next){
    const query = "";
    const data = db.query(query);
    res.status(200).json(JSON.parse(data));
} 