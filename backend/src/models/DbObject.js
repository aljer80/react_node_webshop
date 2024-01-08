const mysql = require("mysql2/promise");

class DbObject{
    constructor(config){
        this.config = config;
        this.connection = null;
    }

    async connect(){
        try{
        this.connection = await mysql.createConnection(this.config);
        console.log("Successfully connected to the database.");
        }catch(error){
            throw error
        }
    }    
}

module.exports = DbObject;
