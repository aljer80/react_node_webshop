// import required files
const DbObject = require("../models/DbObject.js");

/**
 * Database configuration object.
 * @typedef {Object} DbConfig
 * @property {string} host - Database host.
 * @property {number} port - Database port.
 * @property {string} database - Database name.
 * @property {string} user - Database user.
 * @property {string} password - Database password.
 */

/** Database configuration. */
const dbConfig /** @type {DbConfig} */ = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
} 

/** Database instance. */
let db;
try { 
    db = new DbObject(dbConfig);
} catch(error) {
    next(error);
}

/**
 * Get all products from the database.
 * @param {function} next - Callback function to handle results or errors.
 */
const getAllProducts = async (next) => {
    const query = "SELECT * FROM products;"; 
    try {
        const results = await db.query(query);
        next(null, results);
    } catch (err) { 
        next(err);
    }  finally {
        await db.end();
    }
}

/**
 * Get a product by its ID from the database.
 * @param {string} id - Product ID.
 * @param {function} next - Callback function to handle results or errors.
 */
const getProductById = async (id, next) => {
    const query = "SELECT * FROM products WHERE id = :id;";
    try {
        const results = await db.query(query, { id });
        next(null, results);
    } catch (err) { 
        next(err);
    }  finally {
        await db.end();
    }
} 

/**
 * Get all orders from the database.
 * @param {function} next - Callback function to handle results or errors.
 */
const getOrders = async (next) => {
    const query = "SELECT * FROM orders;";
    try {
        const results = await db.query(query);
        next(null, results);
    } catch (err) { 
        next(err);
    } finally {
        await db.end();
    }
} 

/**
 * Get an order by its ID from the database.
 * @param {string} id - Order ID.
 * @param {function} next - Callback function to handle results or errors.
 */
const getOrderById = async (id, next) => {
    const query = "SELECT * FROM orders WHERE id = :id;";
    try {
        const results = await db.query(query, { id });
        next(null, results);
    } catch (err) { 
        next(err);
    } finally {
        await db.end();
    }
} 

/**
 * Add a new order to the database.
 * @param {Object} data - Order data to be inserted.
 * @param {function} next - Callback function to handle results or errors.
 */
const newOrder = async (data, next) => {
    let columnString = "";
    let valueString = "";
    const query = `INSERT INTO orders (${columnString}) VALUES (${valueString});`;
    try {
        const columns = Object.keys(data).join(', ');
        const namedPlaceholders = Object.keys(data).map(param => `:${param}`).join(', ');
        const query = `INSERT INTO orders (${columns}) VALUES (${namedPlaceholders});`;
        const results = await db.query(query, data);
    next(null, results);
    } catch (err) { 
        next(err);
    } finally {
        await db.end();
    }
} 

/**
 * Modify an existing order in the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Callback function to handle results or errors.
 */
const modifyOrder = async (id, data, next) => {
    let columnString = "";
    let valueString = "";
    const query = `UPDATE orders SET (${columnString}) = (${valueString}) WHERE id = :id;`;
    try {
        const updates = Object.keys(data).map(column => `${column} = :${column}`);
        const namedPlaceholders = Object.keys(data).map(param => `:${param}`).join(', ');
        const query = `UPDATE orders SET (${updates.join(', ')}) = (${namedPlaceholders}) WHERE id = :id;`;
        data.id = id;
        const results = await db.query(query, data);
        next(null, results);
    } catch (err) { 
        next(err);
    } finally {
        await db.end();
    }
} 

/**
 * Delete an existing order from the database.
 * @param {string} id - Order ID.
 * @param {function} next - Callback function to handle results or errors.
 */
const deleteOrder = async (id, next) => {
    const query = "DELETE FROM orders WHERE id = :id;";
    try {
        const results = await db.query(query, { id });
        next(null, results);
    } catch (err) { 
        next(err);
    } finally {
        await db.end();
    }
} 

module.exports = { 
    getAllProducts, 
    getProductById, 
    getOrders, 
    getOrderById,
    newOrder, 
    modifyOrder, 
    deleteOrder
}