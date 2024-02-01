/**
     * Creates a new instance of DbObject using the provided configuration.
     * If an error occurs during the creation, it is forwarded to the next middleware.
     */
const DbObject = require("../models/DbObject");
const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    namedPlaceholders: true,
    rowsAsArray: true
};

let db;
try{
    db = new DbObject(dbConfig);
}
catch(error){
    next(error);
}

/**
 * Retrieves all products from the database.
 * @async
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const getAllProducts = async (next) => {
    const query = "SELECT * FROM productlist;";
    try{
        const results = await db.query(query);
        const products = results.map(entry => {
            return {
              id: entry[0],
              name: entry[1],
              brand: entry[2],
              price: entry[3],
              weight: entry[4],
              balance: entry[5],
              shape: entry[6],
              core_material: entry[7],
              surface_material: entry[8],
              description: entry[9]
            };
          });

          return products;
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

/**
 * Retrieves a product with the specified ID from the database.
 * @async
 * @param {string} id - The ID of the product to retrieve.
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const getProduct = async (id, next) => {
    const query = "SELECT * FROM productlist WHERE id = :id;";
    try{
        const results = await db.query(query, { id });
        const product = results.map(entry => {
            return {
              id: entry[0],
              name: entry[1],
              brand: entry[2],
              price: entry[3],
              weight: entry[4],
              balance: entry[5],
              shape: entry[6],
              core_material: entry[7],
              surface_material: entry[8],
              description: entry[9]
            };
          });
        return JSON.stringify(product);
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

/**
 * Retrieves all orders from the database.
 * @async
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const getAllOrders = async (next) => {
    const query = "SELECT * FROM orders;";
    try{
        const results = await db.query(query);
        const orders = results.map(entry => {
            return {
              id: entry[0],
              customerDetails: entry[1],
              items: entry[2],
            };
          });

          return JSON.stringify(orders);
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

/**
 * Retrieves an order with the specified ID from the database.
 * @async
 * @param {string} id - The ID of the order to retrieve.
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const getOrder = async (id, next) => {
    const query = "SELECT * FROM orders WHERE id = :id;";
    try{
        const results = await db.query(query, { id });

        return JSON.stringify(results);
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

/**
 * Creates a new order in the database.
 * @async
 * @param {Object} data - The data to be inserted into the order.
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const newOrder = async (data, next) => {
    try{
        const {customerDetails, items} = data;
        const values = {};
        if(customerDetails){
            values.customerDetails = JSON.parse(customerDetails)
        }
        if(items){
            values.items = JSON.stringify(items)
        }
        const columns = Object.keys(data).join(', ');
        const namedPlaceholders = Object.keys(data).map(param => `:${param}`).join(', ');

        console.log(values)
        const query = `INSERT INTO orders (${columns}) VALUES (${namedPlaceholders});`;
        const results = await db.query(query, values);

        return JSON.stringify(results);
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

/**
 * Modifies an existing order in the database.
 * @async
 * @param {string} id - The ID of the order to be modified.
 * @param {Object} data - The data to be updated in the order.
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const modifyOrder = async (id, data, next) => {
    try{
        const {customerDetails, items} = data;
        const values = {};
        if(customerDetails){
            values.customerDetails = JSON.stringify(customerDetails);
        }
        if(items){
            values.items = JSON.stringify(items);
        }
        if(id){
            values.id = id;
        }

        const updates = Object.keys(data).map(column => `${column} = :${column}`);
        const query = `UPDATE orders SET ${updates.join(', ')} WHERE id = :id;`;
        const results = await db.query(query, values);

        return JSON.stringify(results);
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

/**
 * Deletes an order with the specified ID from the database.
 * @async
 * @param {string} id - The ID of the order to be deleted.
 * @param {Function} next - Callback function to pass results or errors to the next middleware.
 */
const deleteOrder = async (id, next) => {
    const query = "DELETE FROM orders WHERE id = :id;";
    try{
        const results = await db.query(query, { id });
        return JSON.stringify(results);
    }
    catch(err){
        next(err);
    }
    finally{
        await db.end();
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    getAllOrders,
    getOrder,
    newOrder,
    modifyOrder,
    deleteOrder
};