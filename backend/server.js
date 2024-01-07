const express = require("express");
require('dotenv').config()
const DbObject = require("./src/models/DbObject.js");
const app = express();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
} 

async function testMe(){
    const db = new DbObject(dbConfig);
    await db.connect();
}
testMe();