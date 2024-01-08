const mysql = require("mysql2/promise");

class DbObject{
    constructor(config){
        this.config = config;
        this.connection = null;
    }

    async connect(){
        try{
        this.connection = await mysql.createConnection(this.config);
        }catch(error){
            throw error
        }
    }

    //prepared query
    async query(query) {
        try {
            await this.connection.connect();
            return await this.connection.execute(query, (err, rows) => {
                if(err){
                    throw new Error(err);
                } else {
                    return rows;
                }
        });
        } catch(error){
            throw error;
        }
    }
}

module.exports = DbObject;
