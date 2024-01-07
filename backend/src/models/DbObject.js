const mysql = require("mysql2/promise");

class DbObject{
    constructor(config){
        this.config = config;
        this.connection = null;
    }

    async connect(){
        try{
        this.connection = await mysql.createConnection(this.config);
        console.log("success");
        }catch(error){
            console.log(error.message);
        }
    }    
}

module.exports = DbObject;
